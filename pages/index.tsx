import { NextPage } from 'next'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Link,
  Button,
  SimpleGrid,
  List,
  ListItem,
  Icon,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSecion, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'

import thumbYouTube from '../public/images/links/youtube.png'

const Home: NextPage = () => {
  return (
    <Layout title="">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          Hello I&apos;m a full-stack developer based in India!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading variant="page-title">Vigil Varghese</Heading>
            <Text>Digital Craftsman ( Artist / Developer / Designer )</Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            alignItems="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxW="100px"
              display="inline-block"
              borderRadius="full"
              src="images/takuya.jpg"
              alt="profile image"
            />
          </Box>
        </Box>
        <Section delay="0.1">
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            magna diam, iaculis vitae porttitor eget, bibendum in sem. Nunc odio
            dolor, ornare ut sapien et, ultrices gravida lectus. Proin pulvinar
            malesuada dapibus. Nunc ac vulputate nisl, vitae porta urna.
            Vestibulum tempor pellentesque metus lacinia condimentum. Phasellus
            ultrices hendrerit mollis. Nullam urna nulla, gravida interdum
            faucibus ac, vulputate in magna. Donec eu mauris non ipsum consequat
            blandit nec at tortor. Aliquam venenatis quis augue sit amet
            convallis. Cras gravida id nisi in vestibulum. Mauris blandit nunc
            in fringilla{' '}
            <NextLink href="/works/inkdrop">
              <Link>rhoncus</Link>
            </NextLink>
            .
          </Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay="0.2">
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSecion>
            <BioYear>1984</BioYear>
            Born in Osaka, Japan.
          </BioSecion>
          <BioSecion>
            <BioYear>2000</BioYear>
            Born in Osaka, Japan.
          </BioSecion>
          <BioSecion>
            <BioYear>2010</BioYear>
            Born in Osaka, Japan.
          </BioSecion>
        </Section>

        <Section delay="0.3">
          <Heading as="h3" variant="section-title">
            I love
          </Heading>
          <Paragraph>
            Art, music, <Link href="https://illust.odoroinu.net">Drawing</Link>
          </Paragraph>
        </Section>
        <Section delay="0.3">
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <Flex wrap="wrap" justify="space-between" mb={4}>
            <Link href="https://www.github.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @github
              </Button>
            </Link>

            <Link href="https://www.twitter.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @twitter
              </Button>
            </Link>

            <Link href="https://www.instagram.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @instagram
              </Button>
            </Link>

            <Link href="https://www.discord.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                @discord
              </Button>
            </Link>
          </Flex>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="www.youtube.com"
              title="youtube"
              thumbnail={thumbYouTube}
            >
              My Youtube channel
            </GridItem>
            <GridItem
              href="www.youtube.com"
              title="youtube"
              thumbnail={thumbYouTube}
            >
              My Youtube channel
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
