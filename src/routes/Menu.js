import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { MenuList } from '../data/data';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);
  const [addedItem, setAddedItem] = useState(null);

  const handleAddToCart = (menu) => {
    setCartItems([...cartItems, menu]);
    setAddedItem(menu);
    setTimeout(() => {
      setAddedItem(null);
    }, 2000);
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map(menu => (
          <Card key={menu.id} sx={{ maxWidth: '390px', display: 'flex', m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: '400px' }}
                component={'img'}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant='h5' gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant='body2'>
                  {menu.description}
                </Typography>
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  color: "green",
                }}>
                  <Typography variant="h6">
                    Price: ₹{menu.price}
                  </Typography>
                  {addedItem === menu && (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography variant="body2">Added</Typography>
                      <Typography variant="body2" sx={{ ml: 1 }}>{cartItems.filter(item => item === menu).length}</Typography>
                    </Box>
                  )}
                  {!addedItem && (
                    <Button variant="contained" color="primary" onClick={() => handleAddToCart(menu)}>
                      ADD
                    </Button>
                  )}
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#f50057",
          color: "#ffffff",
          borderRadius: "5px",
          padding: "5px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <ShoppingCartIcon />
        <Typography variant="body1">{cartItems.length}</Typography>
      </Box>
      
    </div>
  )
}

export default Menu;
