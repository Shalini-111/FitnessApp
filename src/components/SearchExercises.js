import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  


  useEffect(()=>{
    const fetchExericseData = async()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExericseData();
  },[])

  const handleSearch = async () => {
    console.log(search);
    console.log("button Clicked")
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      console.log(exercisesData)
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      console.log(searchedExercises)
   
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };


  return (
    <Stack alignItems = "center" mt="37px" justifyContent="center" p="20px">
       <Typography fontWeight='700' sx={{
        fontSize:{ lg: '44px', xs:'30px'}
       }} mb="50px" textAlign="center">
          Awesome Exercises You <br />
          Should Know
       </Typography>
       <Box position="relative" mb="72px">
          <TextField
          sx={{
            input:{ 
              fontWeight:'700',
              border:'none',
              borderRadius: '4px'
              
            },
            width:{ lg:'800px',xs:'350px' },
            backgroundColor:'#fff',
            borderRadius:'40px'
          }}
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type = "text"
            />
          <Button className='search-btn'
            sx={{
                bgcolor: '#FF2625',
                color: '#fff',
                textTransform: 'none',
                width: {lg:'145px', xs:'70px'},
                fontSize:{lg:'20px',xs:'14px'},
                height:'56px',
                position:"absolute",
                right:'0px',
                fontSize: { lg: '20px', xs: '14px' } 
              }}
            onClick={handleSearch}
              >
            SEARCH
          </Button>
       </Box>
       <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
         <HorizontalScrollBar 
          data={bodyParts} 
          bodyPart = { bodyPart }
          setBodyPart = { setBodyPart }
          isBodyParts/>
       </Box>
    </Stack>
  )
}

export default SearchExercises