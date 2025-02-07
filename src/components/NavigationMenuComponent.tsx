import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

export type Props = {
  className?: string;
};

const NavigationMenuComponent = (props: Props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className={props.className}>
        <NavigationMenuItem>
          <HashLink smooth to="/#education">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Education
            </NavigationMenuLink>
          </HashLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/docs">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/docs">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Socials
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;
