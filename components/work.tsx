import NextLink from 'next/link'
import { Heading, Box, Text, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'

export const Title = ({ children }: { children: ReactNode }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>

    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }: { children: string }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
