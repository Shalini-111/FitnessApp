import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import Loader from './Loader';    
import HorizontalScrollbar from './HorizontalScrollBar';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: {lg: '80px', xs:'0' }, mb:{lg: '40px', xs:'0'}}}>
      <Typography variant="h4" mb='33px'>
        Similar <span style={{color:"ff2625", textTransform:'capitalize'}}>Target Muscle</span> Exercises
      </Typography>
      <Stack direction='row' sx={{ p: '2', position:'relative' }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar  data = {targetMuscleExercises} /> : <Loader /> }
      </Stack>

      <Typography variant="h4" mb='33px'>
        Similar <span style={{ color:"ff2625", textTransform:'capitalize'}}>Equipment</span> Exercises
      </Typography>
      <Stack direction='row' sx={{ p: '2', position:'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar  data = {equipmentExercises} /> : <Loader /> }
      </Stack>
     
    </Box>
  )
}

export default SimilarExercises