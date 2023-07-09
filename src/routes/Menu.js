import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import React from 'react';
import {MenuList} from '../data/data';


const Menu = () => {
  return (
    <div>
        <Box 
            sx={{
               display:"flex",
               flexWrap: "wrap",
               justifyContent:"center",
            }}
        >
{
        MenuList.map(menu => (
            <Card 
                sx={{
                    maxWidth:'390px' , display:'flex', m:2
                }}
            >
                <CardActionArea>
                    <CardMedia  
                    sx ={{ minHeight: '400px'}} 
                    component={'img'} 
                    src={menu.image} alt={menu.name}/>
                    <CardContent>
                        <Typography variant='h5' gutterBottom component={"div"}>
                            {menu.name}
                        </Typography>
                        <Typography variant='body2'>
                            {menu.description}
                        </Typography>
                        <Box   sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontWeight: "bold",
                    color: "green",
                  }}>

                   
                        <Typography variant="h6" 
                        sx={{
                            display:"flex",
                            alignItems:"center",
                            gap:"4px",
                            fontWeight: "bold",
                            color: "green",
                        }}
                        >
                  Price: ₹{menu.price}
                </Typography>
                <Button variant="contained" color="primary" 
                    sx={{
                        ml:20
                    }}
                >
                    ADD
                </Button>
                </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        ))
}
        </Box>
    </div>
  )
}
export default Menu;