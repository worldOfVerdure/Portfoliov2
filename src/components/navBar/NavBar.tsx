import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

type NavLink = { label: string; href: string };

const DEFAULT_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavBar = ({
  links = DEFAULT_LINKS,
  height = 64,
}: {
  links?: NavLink[];
  height?: number;
}) => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        bgcolor: "rgba(47,47,47,0.55)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        borderBottom: `1px solid rgba(0,0,0,0.04)`,
      }}
    >
      <Toolbar
        component="div"
        disableGutters
        sx={{
          height,
          p: 0
        }}
      >
        <Box
          aria-label="Primary"
          component="ul"
          sx={{
            alignItems: "center",
            display: "flex",
            gap: { xs: 2, md: 4 },
            justifyContent: "end",
            p: 0,
            pr: { xs: 0, sm: 4, md: 6, lg: 8 },
            mx: { xs: 'auto', sm: 0},
            my: 0,
            width: { xs: 'fit-content', sm: '100%' },
            // keep links accessible and tappable on small screens
            "& a": {
              minHeight: 44,
              display: "inline-flex",
              alignItems: "center",
              px: 0.5,
            },
            // if space is tight, allow horizontal scroll (keeps layout stable)
            overflowX: { xs: "auto", md: "visible" },
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            '& li': { listStyle: 'none' }
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  position: "relative",
                  py: 0.5,
                  // hover underline animation
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 4,
                    height: 2,
                    background: '#01e689',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left center',
                    transition: 'transform .22s ease',
                    opacity: 0.95,
                  },
                  "&:hover:after": {
                    transform: "scaleX(1)",
                  },
                  // focus visible for keyboard users
                  '&:focus-visible': {
                    outline: 'none',
                    '&:after': { transform: 'scaleX(1)' },
                  },
                }}
                underline="none"
                variant="navItem"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
