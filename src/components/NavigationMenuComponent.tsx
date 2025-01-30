import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

export type Props = {
  className: string;
};

const NavigationMenuComponent = (props: Props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className={props.className}>
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
