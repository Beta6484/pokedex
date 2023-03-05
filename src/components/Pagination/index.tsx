import React from 'react';
import { Button, FlatList, View } from 'react-native';

type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  paginate(page: number): void;
};

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  for (let i: number = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <View>
      <FlatList
        data={pageNumbers}
        horizontal={true}
        renderItem={({ item }) => (
          <Button
            onPress={() => paginate(item)}
            title={item.toString()}
            key={item}
          />
        )}
      />
    </View>
  );
};

export default Pagination;
