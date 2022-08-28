import { ROUTE_ABOUT } from "@/src/common/constants/routes.constant";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Partner from "./partner/Partner";

const About = () => {
  return (
    <>
      <Stack spacing="64px">
        <Stack
          direction={{
            md: "row",
            sm: "column-reverse",
          }}
          justifyContent="space-between"
        >
          <Box
            w={{
              md: "47%",
              sm: "100%",
            }}
            h="444px"
          >
            <Image
              borderRadius="12px"
              src="/bgHome.png"
              width={"full"}
              height={"full"}
              objectFit="cover"
              alt=""
            />
          </Box>
          <Stack
            w={{
              md: "47%",
              sm: "100%",
            }}
            h="full"
            spacing="32px"
          >
            <Stack>
              <Stack>
                <Link
                  variant={{
                    md: "text20",
                    sm: "text16",
                  }}
                  borderBottom={"solid 1.5px"}
                  width="fit-content"
                  _hover={{ textDecoration: "none" }}
                >
                  Về chúng tôi
                </Link>
              </Stack>
              <Text
                variant={{
                  md: "text36",
                  sm: "text28",
                }}
              >
                ViEF - Vietnam Economic Forum
              </Text>
            </Stack>
            <Text variant="text14" textAlign={"justify"}>
              Với chủ đề ViEF 2021 - Thúc đẩy tăng trưởng kinh tế và tạo sức bật
              cho doanh nghiệp trong tình hình mới, Diễn đàn Kinh tế Việt Nam
              thường niên lần thứ 4 là sự kiện gặp gỡ, đối thoại công tư quy mô
              quốc gia, nhằm huy động, tập hợp hiệu quả nguồn lực của khu vực
              doanh nghiệp để xây dựng và thực thi hiệu quả Chương trình phục
              hồi, phát triển kinh tế giai đoạn 2022 - 2023, góp phần thúc đẩy
              các mục tiêu tăng trưởng giai đoạn 5 năm và trước mắt trọng tâm
              cho năm 2022 là năm có ý nghĩa “bản lề” để bứt phá trong bối cảnh
              dịch bệnh Covid-19.
            </Text>
            <Link href={ROUTE_ABOUT["en"]} _hover={{ textDecoration: "none" }}>
              <Button
                bg="brand.100"
                textColor="white"
                rightIcon={<ArrowForwardIcon />}
              >
                Xem thêm
              </Button>
            </Link>
          </Stack>
        </Stack>

        <Partner />
      </Stack>
    </>
  );
};

export default About;
