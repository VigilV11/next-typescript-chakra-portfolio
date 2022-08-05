import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Inkdrop <Badge>2016</Badge>
        </Title>
        <Paragraph>A markdown note-taking app</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.google.com">
              https://www.google.com <ExternalLinkIcon mx={0.5} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/inkdrop_01.png" alt="inkdrop" />
        <WorkImage src="/images/works/inkdrop_02.png" alt="inkdrop" />
      </Container>
    </Layout>
  )
}

export default Work
