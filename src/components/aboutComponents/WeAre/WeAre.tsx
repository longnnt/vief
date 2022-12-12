import { Box, Button, Center, Divider, Link, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Partner from "../../homeComponents/about/partner/Partner";

const WeAre = () => {
  return (
    <>
      <Box>
        <Box>
          <Stack w="full" align={"center"} spacing={{ md: "64px", sm: "32px" }}>
            <Text
              variant={{
                md: "text20",
                sm: "text16",
              }}
              borderBottom={"solid 1.5px"}
              width="fit-content"
              _hover={{ textDecoration: "none" }}
            >
              Về chúng tôi
            </Text>
            <Stack direction={{ md: "row", sm: "column" }} spacing={{ md: "32px", sm: "16px" }}>
              <Stack spacing={{ sm: "16px", md: "32px" }} w={{ sm: "100%", md: "50%" }} alignSelf="center">
                <Text
                  fontSize={{ base: "none", md: "36px", sm: "28px" }}
                  fontWeight={"700"}
                  textColor="brand.title"
                  lineHeight={"150%"}
                >
                  Diễn đàn Kinh tế Việt Nam (ViEF)
                </Text>
                {/* <Box>
                  <Button variant="primary">Đăng ký nhận tin</Button>
                </Box> */}
              </Stack>
              <Stack spacing={{ sm: "16px", md: "32px" }} w={{ sm: "100%", md: "50%" }}>
                <Stack>
                  <Text variant={"text24"} fontWeight="bold">
                    ViEF
                  </Text>
                  <Text variant={"text18"} color="brand.text" textAlign={"justify"}>
                    ViEF là một doanh nghiệp xã hội phi lợi nhuận được thành lập với vai trò là văn phòng điều hành của
                    Ban nghiên cứu phát triển kinh tế tư nhân (còn gọi là PSDC hoặc Ban IV) thuộc Hội đồng tư vấn cải
                    cách thủ tục hành chính của Thủ tướng Chính phủ.
                  </Text>
                </Stack>
                <Stack>
                  <Text variant={"text24"} fontWeight="bold">
                    Sứ mệnh
                  </Text>
                  <Text variant={"text18"} color="brand.text" textAlign={"justify"}>
                    Sự mệnh của chúng tôi là thúc đẩy sự tham gia của khu vực tư nhân tại Việt Nam, tổng hợp các nguồn
                    lực tư nhân để tạo tính hiệu quả cho các mục tiêu phát triển kinh tế của đất nước.
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Center w="full" h={{ md: "650px", sm: "240px" }} position="relative">
              <Image src="/about-vief-1.png" layout="fill" alt="" />
            </Center>

            <Stack w="full" align={"center"} spacing={{ md: "48px", sm: "32px" }}>
              <Text
                variant={{
                  md: "text24",
                  sm: "text20",
                }}
                fontWeight="bold"
              >
                Nhiệm vụ
              </Text>
              <Stack spacing={"24px"} direction="row">
                <Box>
                  <Text variant={"text18"} color="brand.text" textAlign={"justify"}>
                    Đánh giá việc thực hiện chính sách, đề xuất cải cách, tháo gỡ khó khăn, tạo môi trường phát triển
                    nhằm thúc đẩy kinh doanh và tạo thuận lợi thương mại.
                  </Text>
                </Box>
                <Box border={"1px solid black"} />
                <Box>
                  <Text variant={"text18"} fontWeight={"500"} color="brand.text" textAlign={"justify"}>
                    Ngoài ra, PSDC được cử phụ trách báo cáo hàng tháng về khó khăn của khu vực kinh tế tư nhân và các
                    kiến nghị chính sách trình Thủ tướng Chính phủ nhằm tạo điều kiện thuận lợi, tháo gỡ khó khăn, vướng
                    mắc cho doanh nghiệp.
                  </Text>
                </Box>
                <Box border={"1px solid black"} />
                <Box>
                  <Text variant={"text18"} color="brand.text" textAlign={"justify"}>
                    Tổ chức Diễn đàn Kinh tế Việt Nam, diễn đàn kinh tế cấp quốc gia và quốc tế để thảo luận về các vấn
                    đề quan trọng và chiến lược kinh tế vĩ mô của Việt Nam trong bối cảnh toàn cầu và khu vực, đồng thời
                    liên tục duy trì đối thoại chính sách công - tư cấp cao giữa Chính phủ, khu vực tư nhân và các bên
                    liên quan.
                  </Text>
                </Box>
                <Box border={"1px solid black"} />
                <Box>
                  <Text variant={"text18"} color="brand.text" textAlign={"justify"}>
                    Thực hiện các nghiên cứu, đánh giá, tham vấn chuyên sâu và khách quan, đề xuất và thí điểm các mô
                    hình mới hỗ trợ phát triển kinh tế tư nhân gắn với các nhiệm vụ trọng tâm phát triển kinh tế trong
                    nước.
                  </Text>
                </Box>
              </Stack>
            </Stack>
            <Center w="full" h={{ md: "650px", sm: "240px" }} position="relative">
              <Image src="/about-vief-2.png" layout="fill" alt="" />
            </Center>
            {/* <Partner /> */}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default WeAre;
