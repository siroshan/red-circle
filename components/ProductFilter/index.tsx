import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { AxiosResponse } from 'axios';
import axios from '../../utils/axios';
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { axiosErrorHandler } from '../../utils/axiosErrorHandler';
import { IProduct } from '../../Interface/product.interface';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

type ProductFilterProps = {
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  searchQuery: string | string[] | undefined;
  setProductsCount: Dispatch<SetStateAction<number>>;
};

const wineTypes = [
  { value: 'red', label: 'Red' },
  { value: 'white', label: 'White' },
  { value: 'sparkling', label: 'Sparkling' },
  { value: 'dessert', label: 'Dessert' },
];

const pricetext = (value: number) => {
  return `${value}$`;
};

const ProductFilter: FC<ProductFilterProps> = ({
  setProducts,
  searchQuery,
  setProductsCount,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [wineType, setWineType] = useState('all');
  const [priceRange, setPriceRange] = useState<number[]>([0, 100000]);
  const isFirstUpdate = useRef(true);

  const handleWineTypeChange = (event: SelectChangeEvent) => {
    setWineType(event.target.value);
  };

  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    setPriceRange(newValue as number[]);
  };

  useLayoutEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      console.log('filter first render');
      return;
    }
    console.log('filter not first render');
    setIsLoading(true);
    axios
      .get(
        `products/search?searchQuery=${searchQuery}&type=${wineType}&gt=${priceRange[0]}&ls=${priceRange[1]}&take=10&skip=0`
      )
      .then((res) => {
        console.log('filter response', res);
        setProducts(res.data.result);
        setProductsCount(res.data.count);
      })
      .catch((err) => {
        console.log('filter error', err);
        axiosErrorHandler(err);
      });

    setIsLoading(false);
  }, []);

  return (
    <Box width={1}>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <FormControl className='custom-select' size='small'>
          <InputLabel id='wine-select'>Wine Type</InputLabel>
          <Select
            labelId='wine-select'
            id='wine-select'
            value={wineType}
            label='Wine Type'
            onChange={handleWineTypeChange}
            defaultValue='all'
          >
            <MenuItem value='all'>All</MenuItem>
            {wineTypes.map((type, i) => (
              <MenuItem key={i} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box width={1} maxWidth={300}>
          <Typography variant='body1' color='common.black'>
            Price Range
          </Typography>
          <Slider
            getAriaLabel={() => 'Price range'}
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay='auto'
            color='secondary'
            getAriaValueText={pricetext}
            max={100000}
            min={0}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductFilter;
