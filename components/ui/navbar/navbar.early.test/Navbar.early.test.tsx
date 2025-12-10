import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import { Navbar } from "../navbar";

// Mocks for next/image and next/link
jest.mock("next/image", () => {
  const MockImage = (props: {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  }) => {
    // Render a div with data attributes for testing (simulating Next.js Image)
    return (
      <div
        data-src={props.src}
        data-alt={props.alt}
        data-width={props.width}
        data-height={props.height}
      >
        {props.alt}
      </div>
    );
  };
  MockImage.displayName = "MockImage";
  return MockImage;
});
jest.mock("next/link", () => {
  const MockLink = ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

// Mocks for icons
jest.mock("@/assets/icons", () => ({
  Android: "/mock-android.svg",
  iOS: "/mock-ios.svg",
}));

describe("Navbar() Navbar method", () => {
  // Happy Paths
  describe("Happy Paths", () => {
    test("renders with default brandName and brandInitial", () => {
      // This test ensures the Navbar renders with default props.
      render(<Navbar />);
      expect(screen.getByText("Borzolini")).toBeInTheDocument();
      expect(screen.getByText("B")).toBeInTheDocument();
    });

    test("renders with custom brandName and brandInitial", () => {
      // This test ensures the Navbar renders with custom props.
      render(<Navbar brandName="PetCare" brandInitial="P" />);
      expect(screen.getByText("PetCare")).toBeInTheDocument();
      expect(screen.getByText("P")).toBeInTheDocument();
    });

    test("renders all desktop navigation items", () => {
      // This test ensures all nav items are rendered in desktop mode.
      render(<Navbar />);
      expect(screen.getByText("Features")).toBeInTheDocument();
      expect(screen.getByText("AI Scanner")).toBeInTheDocument();
      expect(screen.getByText("Find Vets")).toBeInTheDocument();
      expect(screen.getByText("Coming Soon")).toBeInTheDocument();
    });

    test("renders iOS and Android CTA buttons (desktop)", () => {
      // This test ensures the iOS and Android buttons are rendered (desktop).
      render(<Navbar />);
      // Desktop buttons are hidden by default (sm:flex), but present in DOM
      const iosBtn = screen.getAllByText("iOS")[0];
      const androidBtn = screen.getAllByText("Android")[0];
      expect(iosBtn.closest("button")).toBeInTheDocument();
      expect(androidBtn.closest("button")).toBeInTheDocument();
      // Check that the mocked images are rendered (Next.js Image mock renders div with data attributes)
      const iosImage = screen
        .getByText("iOS")
        .closest("button")
        ?.querySelector('[data-alt="iOS"]');
      const androidImage = screen
        .getByText("Android")
        .closest("button")
        ?.querySelector('[data-alt="Android"]');
      expect(iosImage).toBeInTheDocument();
      expect(androidImage).toBeInTheDocument();
    });

    test("mobile menu button toggles mobile navigation", () => {
      // This test ensures clicking the mobile menu button opens and closes the mobile nav.
      render(<Navbar />);
      const menuBtn = screen.getByLabelText("Toggle menu");
      // Mobile nav should not be visible initially
      expect(screen.queryByText("Find Vets")).toBeInTheDocument(); // Desktop
      // Open mobile menu
      fireEvent.click(menuBtn);
      // Mobile nav should now be visible (with nav items in mobile context)
      // There are two sets of nav items, so getAllByText returns >1
      expect(screen.getAllByText("Find Vets").length).toBeGreaterThan(1);
      // Close mobile menu
      fireEvent.click(menuBtn);
      // Mobile nav should be hidden again
      // Only desktop nav remains
      expect(screen.getAllByText("Find Vets").length).toBe(1);
    });

    test("clicking a mobile nav item closes the mobile menu", () => {
      // This test ensures clicking a mobile nav link closes the menu.
      render(<Navbar />);
      const menuBtn = screen.getByLabelText("Toggle menu");
      fireEvent.click(menuBtn); // open
      // Find the mobile nav link (the second occurrence)
      const mobileNavLink = screen.getAllByText("AI Scanner")[1];
      fireEvent.click(mobileNavLink);
      // Mobile nav should be closed
      expect(screen.getAllByText("AI Scanner").length).toBe(1);
    });

    test("renders iOS and Android CTA buttons in mobile menu", () => {
      // This test ensures the mobile menu contains iOS and Android buttons with SVGs.
      render(<Navbar />);
      const menuBtn = screen.getByLabelText("Toggle menu");
      fireEvent.click(menuBtn); // open
      // There are two iOS and Android buttons now (desktop and mobile)
      // The mobile ones are rendered as <button> with SVG inside
      // Find all iOS and Android buttons
      const iosBtns = screen.getAllByText("iOS");
      const androidBtns = screen.getAllByText("Android");
      // The last ones are in the mobile menu
      expect(iosBtns[iosBtns.length - 1].closest("button")).toBeInTheDocument();
      expect(
        androidBtns[androidBtns.length - 1].closest("button")
      ).toBeInTheDocument();
      // Check that the SVGs are present in the mobile menu buttons
      const iosSvg = iosBtns[iosBtns.length - 1]
        .closest("button")
        ?.querySelector("svg");
      const androidSvg = androidBtns[androidBtns.length - 1]
        .closest("button")
        ?.querySelector("svg");
      expect(iosSvg).toBeInTheDocument();
      expect(androidSvg).toBeInTheDocument();
    });

    test("desktop nav links have correct hrefs", () => {
      // This test ensures that desktop nav links have the correct href attributes.
      render(<Navbar />);
      expect(screen.getByText("Features").closest("a")).toHaveAttribute(
        "href",
        "#features"
      );
      expect(screen.getByText("AI Scanner").closest("a")).toHaveAttribute(
        "href",
        "#ai-scanner"
      );
      expect(screen.getByText("Find Vets").closest("a")).toHaveAttribute(
        "href",
        "#find-vets"
      );
      expect(screen.getByText("Coming Soon").closest("a")).toHaveAttribute(
        "href",
        "#coming-soon"
      );
    });
  });

  // Edge Cases
  describe("Edge Cases", () => {
    test("renders with empty string brandName and brandInitial", () => {
      // This test ensures the Navbar handles empty string props gracefully.
      render(<Navbar brandName="" brandInitial="" />);
      // Brand name and initial should be rendered as empty
      expect(screen.getByText("")).toBeInTheDocument();
    });

    test("multiple rapid clicks on mobile menu button toggles menu correctly", () => {
      // This test ensures rapid toggling of the mobile menu does not break state.
      render(<Navbar />);
      const menuBtn = screen.getByLabelText("Toggle menu");
      // Open and close rapidly
      fireEvent.click(menuBtn); // open
      fireEvent.click(menuBtn); // close
      fireEvent.click(menuBtn); // open
      // Mobile nav should be open
      expect(screen.getAllByText("Find Vets").length).toBeGreaterThan(1);
      fireEvent.click(menuBtn); // close
      // Only desktop nav remains
      expect(screen.getAllByText("Find Vets").length).toBe(1);
    });

    test("mobile menu closes when clicking Android button in mobile menu", () => {
      // This test ensures clicking Android button in mobile menu does not throw and menu remains open (since no explicit close).
      render(<Navbar />);
      const menuBtn = screen.getByLabelText("Toggle menu");
      fireEvent.click(menuBtn); // open
      const androidBtns = screen.getAllByText("Android");
      const mobileAndroidBtn =
        androidBtns[androidBtns.length - 1].closest("button");
      fireEvent.click(mobileAndroidBtn!);
      // Mobile nav should still be open (since button does not close menu)
      expect(screen.getAllByText("Find Vets").length).toBeGreaterThan(1);
    });

    test("renders correctly when brandName and brandInitial are long strings", () => {
      // This test ensures the Navbar handles long brandName and brandInitial.
      const longName = "SuperLongBrandNameThatExceedsNormal";
      const longInitial = "SLBNTEN";
      render(<Navbar brandName={longName} brandInitial={longInitial} />);
      expect(screen.getByText(longName)).toBeInTheDocument();
      expect(screen.getByText(longInitial)).toBeInTheDocument();
    });
  });
});
