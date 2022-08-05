import NextLink from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ReactNode } from 'react'

interface GridItemInterface {
  children: ReactNode
  href: string
  title: string
  thumbnail: StaticImageData
}

interface WorkGridItemInterface {
  children: ReactNode
  id: string
  title: string
  thumbnail: StaticImageData
}

export const GridItem = ({
  children,
  href,
  title,
  thumbnail
}: GridItemInterface) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail
}: WorkGridItemInterface) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global styles={`.grid-item-thumbnail: {border-radius: 12px;}`} />
)
