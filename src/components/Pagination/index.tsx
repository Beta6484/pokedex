import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'react-native-feather';
import { Button, CurrPage, PaginationContainer } from './styles';

type PaginationProps = {
  currPage: number;
  itemsPerPage: number;
  totalItems: number;
  paginate(page: number): void;
};

const Pagination: React.FC<PaginationProps> = ({
  currPage,
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page: number) => {
    paginate(page);
  };

  return (
    <PaginationContainer>
      <Button onPress={() => goToPage(1)} disabled={currPage === 1}>
        <ChevronsLeft />
      </Button>
      <Button onPress={() => goToPage(currPage - 1)} disabled={currPage === 1}>
        <ChevronLeft />
      </Button>
      <CurrPage>Page {currPage}</CurrPage>
      <Button
        onPress={() => goToPage(currPage + 1)}
        disabled={currPage === totalPages}
      >
        <ChevronRight />
      </Button>
      <Button
        onPress={() => goToPage(totalPages)}
        disabled={currPage === totalPages}
      >
        <ChevronsRight />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
