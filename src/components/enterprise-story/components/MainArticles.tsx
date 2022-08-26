import { ArticleItem } from "@/src/common/components/articleItem";
import { Pagination } from "@/src/common/components/pagination";
import { PICTURE } from "@/src/common/constants/common.constant";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { DATA_ARTICLE } from "../constants";

function MainArticles() {
  return (
    <VStack alignItems="flex-start" spacing="32px">
      <Text
        variant={{
          base: "text28",
          sm: "text24",
        }}
      >
        Case study
      </Text>
      <HStack spacing="32px">
        <Button variant="">Ngành Gỗ</Button>
        <Button variant="primary">Ngành khác</Button>
      </HStack>

      <Stack
        height={{
          base: "444px",
          sm: "unset",
        }}
        flexDir={{
          sm: "column-reverse",
          base: "row",
        }}
      >
        <VStack
          justifyContent="space-between"
          w={{
            base: "50%",
            sm: "full",
          }}
          h="full"
          pt={{
            base: "35px",
            sm: "16px",
          }}
          pr={{
            base: "64px",
            sm: "unset",
          }}
        >
          <Text
            variant={{
              base: "text36",
              sm: "text28",
            }}
          >
            IFC phối hợp ngân hàng Việt thúc đẩy dự án bảo vệ môi trường
          </Text>
          <Text variant="text14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra orci sagittis eu volutpat odio facilisis
            mauris sit amet massa
          </Text>
        </VStack>
        <Box
          w={{
            base: "50%",
            sm: "full",
          }}
          h={{
            base: "full",
            sm: "257px",
          }}
          overflow="hidden"
        >
          <Img src={PICTURE()} w="full" h="full" borderRadius="12px" />
        </Box>
      </Stack>

      <Grid
        templateColumns={{
          sm: "repeat(2, 1fr)",
          base: "repeat(3, 1fr)",
        }}
        gap={{
          base: 6,
          sm: 4,
        }}
      >
        {DATA_ARTICLE.map((article, index) => {
          return (
            <GridItem key={index}>
              <ArticleItem article={article} />
            </GridItem>
          );
        })}
      </Grid>
      <Box display="flex" justifyContent="center" w="full">
        <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
      </Box>
    </VStack>
  );
}

export { MainArticles };
