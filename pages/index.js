import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Modal,

  ModalContent,
  ModalCloseButton,
  ModalBody,

  ModalOverlay,

  useDisclosure,
  useToast


} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoFacebook, IoLogoTiktok, } from 'react-icons/io5'
import Image from 'next/image'


import { useState } from 'react';

const FullScreenImage = ({ src, alt }) => {
  const [showFullScreen, setShowFullScreen] = useState(false);

  const openFullScreen = () => {
    setShowFullScreen(true);
    document.body.style.overflow = 'hidden'; // Ngăn cuộn trang khi hiển thị ảnh toàn màn hình
  };

  const closeFullScreen = () => {
    setShowFullScreen(false);
    document.body.style.overflow = ''; // Cho phép cuộn trang lại sau khi đóng ảnh toàn màn hình
  };

  if (showFullScreen) {
    return (
      <div className="fullscreen-overlay" onClick={closeFullScreen}>
        <div className="fullscreen-wrapper">
          <img src={src} alt={alt} className="fullscreen-image" />
          <button className="fullscreen-close" onClick={closeFullScreen}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="thumbnail-image"
      onClick={openFullScreen}
    />
  );
};

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()
  const handleClick = () => {
    const phoneNumber = '0868943096';
    navigator.clipboard.writeText(phoneNumber);
    toast({
      title: 'Đã copy',
      description: "0868943096",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  };

  return (
    <>
      <Layout>


        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody style={{ padding: '70px' }}>
              <img
                alt=""
                loading="lazy"
                width={300}
                height={300}
                decoding="async"
                data-nimg={1}
                srcSet="/qr.jpg"
                src="/qr.jpg"
                style={{ color: "transparent", objectFit: "cover", borderRadius: 10 }}
              />

            </ModalBody>

          </ModalContent>
        </Modal>
        <Container>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            Hello, I&apos;m Yến Chu Nè
          </Box>

          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Chinh nè
              </Heading>
              <p>Tôi là ( Designer )</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
            >
              <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow="hidden"
              >
                <FullScreenImage
                  src={"/profile5.jpg"} alt="Profile image"
                />
              </Box>
            </Box>
          </Box>

          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              Kênh Donate
            </Heading>
            <List style={{ display: 'flex' }}>

              <ListItem>
                <Link target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    onClick={onOpen}
                  >
                    <span className="chakra-button__icon css-1wh2kri">
                      <img
                        alt=""
                        aria-hidden="true"
                        focusable="false"
                        loading="lazy"
                        width={20}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-MB-Bank-MBB.png"
                        src="https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-MB-Bank-MBB.png"
                      />

                    </span>

                    QR MBBANK
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"

                  >
                    <span className="chakra-button__icon css-1wh2kri">

                      <img
                        alt=""
                        aria-hidden="true"
                        focusable="false"
                        loading="lazy"
                        width={20}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="https://img.cake.vn/2021/09/e166aa95-z2434192104284_4a91929db3363e3c43118490fcbe922f.jpg"
                        src="https://img.cake.vn/2021/09/e166aa95-z2434192104284_4a91929db3363e3c43118490fcbe922f.jpg"
                      />
                    </span>

                    Cake Bank
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    onClick={handleClick}
                  >
                    <span className="chakra-button__icon css-1wh2kri">
                      <img
                        alt=""
                        aria-hidden="true"
                        focusable="false"
                        loading="lazy"
                        width={20}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="https://donate.phatsaygame.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpasscode.b53cb137.png&w=32&q=75"
                        src="https://donate.phatsaygame.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpasscode.b53cb137.png&w=32&q=75"
                      />
                    </span>
                    STK
                  </Button>
                </Link>
              </ListItem>
            </List>

          </Section>





          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              Social Network
            </Heading>
            <List>
              <ListItem>
                <Link href="https://www.tiktok.com/@good_night_zzz2" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"

                  >
                    <span className="chakra-button__icon css-1wh2kri">
                      <img
                        alt=""
                        aria-hidden="true"
                        focusable="false"
                        loading="lazy"
                        width={50}
                        height={50}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="https://img.icons8.com/clouds/100/tiktok.png?fbclid=IwAR3E9Q_-kkXC-ITOc_9Uz3XGt91xBvfjVQRy33Sge-WH-9ZbTy74nmiiUU4"
                        src="https://img.icons8.com/clouds/100/tiktok.png?fbclid=IwAR3E9Q_-kkXC-ITOc_9Uz3XGt91xBvfjVQRy33Sge-WH-9ZbTy74nmiiUU4"
                      />

                    </span>
                    Tiktok
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.facebook.com/trinhnguyen113" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"

                  >
                    <span className="chakra-button__icon css-1wh2kri">
                      <img
                        alt=""
                        aria-hidden="true"
                        focusable="false"
                        loading="lazy"
                        width={50}
                        height={50}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="https://img.icons8.com/clouds/100/facebook.png?fbclid=IwAR3E9Q_-kkXC-ITOc_9Uz3XGt91xBvfjVQRy33Sge-WH-9ZbTy74nmiiUU4"
                        src="https://img.icons8.com/clouds/100/facebook.png?fbclid=IwAR3E9Q_-kkXC-ITOc_9Uz3XGt91xBvfjVQRy33Sge-WH-9ZbTy74nmiiUU4"
                      />

                    </span>
                    FaceBook
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://www.instagram.com/ntl.chinn_an" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"

                  >
                    <span className="chakra-button__icon css-1wh2kri">
                      <img
                        alt=""
                        aria-hidden="true"
                        focusable="false"
                        loading="lazy"
                        width={50}
                        height={50}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        srcSet="https://img.icons8.com/clouds/100/instagram.png?fbclid=IwAR3E9Q_-kkXC-ITOc_9Uz3XGt91xBvfjVQRy33Sge-WH-9ZbTy74nmiiUU4"
                        src="https://img.icons8.com/clouds/100/instagram.png?fbclid=IwAR3E9Q_-kkXC-ITOc_9Uz3XGt91xBvfjVQRy33Sge-WH-9ZbTy74nmiiUU4"
                      />

                    </span>
                    Instagram
                  </Button>
                </Link>
              </ListItem>

            </List>
            <Box align="center" my={4}>
              <Button
                as={NextLink}

                href="
                mailto:trinhnguyen0489@gmail.com "
                scroll={false}
                leftIcon={<EmailIcon />}
                colorScheme="teal"
              >
                Liên Hệ Công Việc
              </Button>
            </Box>
          </Section>

        </Container>
      </Layout>
    </>
  )


}

export default Home
export { getServerSideProps } from '../components/chakra'
