import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../helpers';
import { CartItem } from '../Types';

const Root = styled.div``;

const ImageContainer = styled.div``;

const Details = styled.div``;

const Name = styled.p``;

const Price = styled.p``;

const Buttons = styled.div``;

const QuantityButtons = styled.div``;

const Button = styled.button``;

const Icon = styled.svg`
  width: 2rem;
  height: 2rem;
`;

const DeleteBtn = styled.button``;

const DeleteIcon = styled.svg`
  width: 2rem;
  height: 2rem;
`;

const CartProdPreview: FC<CartItem> = ({
  name,
  price,
  href,
  thumbnail,
  quantity,
}) => {
  return (
    <Root>
      {/* Product image */}
      <ImageContainer>
        <Link href={href}>
          <a>
            <Image src={thumbnail} alt={name} width={200} height={200} />
          </a>
        </Link>
      </ImageContainer>

      {/* Details */}
      <Details>
        <Link href={href}>
          <a>
            {/* Name */}
            <Name>{name}</Name>

            {/* Price */}
            <Price>{formatPrice(price)}</Price>
          </a>
        </Link>

        {/* Buttons */}
        <Buttons>
          {/* Quantity increase decrease buttons */}
          <QuantityButtons>
            {/* Minus button */}
            <Button>
              <Icon>
                <use href="" />
              </Icon>
            </Button>

            {/* Quantity */}
            {quantity}

            {/* Plus button */}
            <Button>
              <Icon>
                <use href="" />
              </Icon>
            </Button>
          </QuantityButtons>

          {/* Delete button */}
          <DeleteBtn>
            <DeleteIcon>
              <use href="" />
            </DeleteIcon>
          </DeleteBtn>
        </Buttons>
      </Details>
    </Root>
  );
};

export default CartProdPreview;
