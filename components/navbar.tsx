import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'
import ThemeToggleButton from './theme-toggle-button'

const HEADER_LINKS = ['Works', 'Posts']

const LinkItem = ({
  href,
  path,
  children
}: {
  href: string
  path: string
  children: ReactNode
}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props: any) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {HEADER_LINKS.map(item => (
            <LinkItem href={`/${item.toLowerCase()}`} path={path} key={item}>
              {item}
            </LinkItem>
          ))}
        </Stack>

        {/* <Box flex={0} alignItems="right">
          <Box display="inline">a</Box>
          <Box display="inline">b</Box>
        </Box> */}
        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                {HEADER_LINKS.map(item => (
                  <NextLink href={`/${item.toLowerCase()}`} passHref key={item}>
                    <MenuItem as={Link}>{item}</MenuItem>
                  </NextLink>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
      {/* <Flex
      p={2}
      maxW='container.md'
      wrap='wrap'
      align='center'
      justify='space-between'
      ></Flex> */}
    </Box>
  )
}

export default Navbar
