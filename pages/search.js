import { useRouter } from "next/router";

const PAGE_SIZE = 2;

const prices = [
  {
    name: "R100 to R1000",
    value: "1-50",
  },
  {
    name: "R1000 to R5000",
    value: "1000-5000",
  },
  {
    name: "R100 to R1000",
    value: "1-50",
  },
];

const rating = [1, 2, 3, 4, 5];

export default function Search(props) {
  const router = useRouter();
  const {
    query = "all",
    category = "all",
    brand = "all",
    price = "all",
    rating = "all",
    sort = "featured",
    page = 1,
  } = router.query;

  const { products, countProducts, categories,brands,pages } = props;

  const filterSearch = ({
    page,
    category,
    brand,
    sort,
    min,
    max,
    searchQuery,
    price,
    rating
  }) =>{
    const {query}

  }
}
