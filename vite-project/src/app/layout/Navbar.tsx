import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const navListMenuItems = [
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact us",
    url: "/contact",
  },
  {
    title: "News",
    url: "/content",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, url }, key) => (
    <NavLink to={url} key={key}>
      <MenuItem
        className="flex flex-col  items-center gap-3 rounded-lg"
        placeholder={undefined}
      >
        <Typography
          variant="h6"
          color="blue-gray"
          className="flex items-center text-sm font-bold"
          placeholder={undefined}
        >
          {title}
        </Typography>
      </MenuItem>
    </NavLink>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className="font-medium"
            placeholder={undefined}
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              placeholder={undefined}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className="hidden max-w-screen-xl rounded-xl lg:block"
          placeholder={undefined}
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List
      className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
      placeholder={undefined}
    >
      <Typography
        as="h6"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
        placeholder={undefined}
      >
        {" "}
        <NavLink to={"/"}>
          {" "}
          <ListItem
            className="flex items-center gap-2 py-2 pr-4"
            placeholder={undefined}
          >
            Home
          </ListItem>
        </NavLink>
      </Typography>
      <NavListMenu />
      <Typography
        as="h6"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
        placeholder={undefined}
      >
        <NavLink to={`createContent`}>
          <ListItem
            className="flex items-center gap-2 py-2 pr-4"
            placeholder={undefined}
          >
            Create Content
          </ListItem>
        </NavLink>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      fullWidth
      className="px-4 py-4 bg-yellow-400"
      placeholder={undefined}
    >
      <div className="flex items-center justify-between text-blue-gray-900 text-center place-items-center">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          placeholder={undefined}
        >
          <Link to="/"> School Content</Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button
            variant="text"
            size="sm"
            color="blue-gray"
            placeholder={undefined}
          >
            Log In
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
          placeholder={undefined}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button
            variant="outlined"
            size="sm"
            color="blue-gray"
            fullWidth
            placeholder={undefined}
          >
            Log In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
