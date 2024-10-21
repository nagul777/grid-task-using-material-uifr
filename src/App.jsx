import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
import { Box, Container, Grid2, styled, Typography } from '@mui/material';
import { green, orange } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import { ArrowRight } from '@mui/icons-material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import { Avatar } from '@mui/material';

const SeeDetailsButton = styled(Button)({
    textTransform: 'none',
    color:'black',
    fontSize:'14px',
    fontWeight:'700'
})

function App() {
   return (
    <>
    <Container maxWidth='xl'>      

        <Box className='bg-[#f8f4f0] grid grid-cols-5'>
                   {/* overview left black */}
              <Box className='col-span-1 bg-black pr-5 h-[100%] rounded-[0px_20px_0px_0px] '>
                    <Box className='flex flex-col gap-4'>

                          <Box className='p-[30px_0px_50px_30px]'>
                                <img src="/assets/finance.svg" alt="financs"/>
                            </Box>


                            <Box className='flex justify-start items-center gap-4 text-black bg-[#f8f4f0] p-[12px_100px_12px_25px] rounded-[0px_10px_10px_0px] border-l-4 border-[#1f7987] ' >
                                  <img src="/assets/overview.svg" className='text-[#1f7987]' alt="home" />
                                    <Typography variant='h6' sx={{fontSize:'16px', fontWeight:'700'}}>
                                            Overview
                                        </Typography>
                              </Box>


                              <Box className='flex justify-start items-center gap-5 text-white p-[12px_100px_12px_25px]'>
                                    <img src="/assets/transactions.svg" alt="home" />
                                        <Typography variant='h6' sx={{fontSize:'16px', fontWeight:'700', color:'#B3B3B3;'}}>
                                                Transactions
                                          </Typography>
                              </Box>


                              <Box className='flex justify-start items-center gap-5 text-white p-[12px_100px_12px_25px]' >
                                          <img src="/assets/budgets.svg" alt="home" />
                                            <Typography variant='h6' sx={{fontSize:'16px', fontWeight:'700', color:'#B3B3B3;'}}>
                                                    Budgets
                                            </Typography>
                                    </Box>


                                      <Box className='flex justify-start items-center gap-5 text-white p-[12px_100px_12px_25px]'>
                                            <img src="/assets/pots.svg" alt="home" />
                                              <Typography variant='h6' sx={{fontSize:'16px', fontWeight:'700', color:'#B3B3B3;'}}>
                                                      Pots
                                              </Typography>
                                      </Box>


                                  <Box className='flex justify-start items-center gap-5 text-white p-[12px_100px_12px_25px]' >
                                        <img src="/assets/recurring.svg" alt="home" />
                                          <Typography variant='h6' sx={{fontSize:'16px', fontWeight:'700', color:'#B3B3B3;'}}>
                                                  Recurring
                                          </Typography>
                                </Box>

                    </Box>
              </Box>
                {/* overview left black */}

                {/* overview right white */}
                    <Box className='col-span-4 p-[48px_42px_32px_42px] '>

                          <Box className='flex flex-col gap-8'>
                                  <Box> 
                                     <Typography variant='h6' sx={{fontSize:'32px', fontWeight:'900'}}>
                                            Overview
                                      </Typography>
                                  </Box>

                                  {/* 3 grid layout */}
                                  <Box className='grid grid-cols-3 gap-6'>

                                            <Box className='bg-black p-6 rounded-xl text-white'>
                                                  <Typography variant='paragraph' sx={{fontSize:'14px', fontWeight:'400'}}>
                                                     Current Balance 
                                                  </Typography>
                                                  <Typography variant='h6' sx={{fontSize:'32px', fontWeight:'900'}}>
                                                        $4,836.00
                                                  </Typography>
                                            </Box>

                                            <Box className='bg-white p-6 rounded-xl text-black'>
                                                  <Typography variant='paragraph' sx={{fontSize:'14px', fontWeight:'400'}}>
                                                      Income  
                                                  </Typography>
                                                  <Typography variant='h6' sx={{fontSize:'32px', fontWeight:'900'}}>
                                                      $3,814.25 
                                                  </Typography>
                                            </Box>

                                            <Box className='bg-white p-6 rounded-xl text-black'>
                                                  <Typography variant='paragraph' sx={{fontSize:'14px', fontWeight:'400'}}>
                                                     Expenses  
                                                  </Typography>
                                                  <Typography variant='h6' sx={{fontSize:'32px', fontWeight:'900'}}>
                                                       $1,700.50 
                                                  </Typography>
                                            </Box>

                                  </Box>
                                    {/* 3 grid layout */}

                                    {/* Four grid layout */}

                                    <Box className='grid grid-cols-6 gap-6'>

                                          {/* 1st box  */}
                                         <Box className='col-span-3 row-span-1 p-8 bg-white rounded-xl'>

                                              <Box className='flex flex-col gap-5'>
                                                            <Box className='flex justify-between'>

                                                                  <Typography sx={{fontSize:'20px', fontWeight:'700'}}>
                                                                  Pots
                                                                  </Typography>

                                                                        <SeeDetailsButton>
                                                                        See Details 
                                                                              <ArrowRightIcon></ArrowRightIcon>
                                                                        </SeeDetailsButton>                                                     
                                                            </Box>

                                                            <Box className='flex justify-between gap-5'>
                                                                  <Box className='bg-[#f8f4f0] p-4 flex gap-4 items-center w-[50%] rounded-lg'>
                                                                              <Box>
                                                                                    <RequestQuoteOutlinedIcon sx={{color:'#277c78', fontSize:'40px'}}></RequestQuoteOutlinedIcon>
                                                                              </Box>
                                                                                    <Box>
                                                                                          <Typography sx={{fontSize:'14px', fontWeight:'400', color:'#696868'}}>
                                                                                                Total Saved
                                                                                          </Typography>
                                                                                          <Typography sx={{fontSize:'32px', fontWeight:'700'}}>
                                                                                                $319 
                                                                                          </Typography>
                                                                                    </Box>

                                                                  </Box>


                                                                 <Box className='w-[50%] grid grid-cols-2 gap-4'>
                                                                      <Box className='border-l-4 border-[#277c78] pl-3 rounded-[2px]'>
                                                                                <Typography variant='subtitle1' sx={{fontSize:'12px', fontWeight:'400'}}>
                                                                                   Savings 
                                                                                    </Typography>
                                                                                    <Typography variant='subtitle1' sx={{fontSize:'14px', fontWeight:'900'}}>
                                                                                          $159 
                                                                                    </Typography>
                                                                      </Box>

                                                                      <Box className='border-l-4 border-[#696868] pl-3 rounded-[2px]'>
                                                                                <Typography variant='subtitle1' sx={{fontSize:'12px', fontWeight:'400'}}>
                                                                                     Concert Ticket  
                                                                                    </Typography>
                                                                                    <Typography variant='subtitle1' sx={{fontSize:'14px', fontWeight:'900'}}>
                                                                                          $110 
                                                                                    </Typography>
                                                                      </Box>

                                                                      <Box className='border-l-4 border-[#82c9d7] pl-3 rounded-[2px]'>
                                                                                <Typography variant='subtitle1' sx={{fontSize:'12px', fontWeight:'400'}}>
                                                                                    Gift 
                                                                                    </Typography>
                                                                                    <Typography variant='subtitle1' sx={{fontSize:'14px', fontWeight:'900'}}>
                                                                                          $40 
                                                                                    </Typography>
                                                                      </Box>

                                                                      <Box className='border-l-4 border-[#f2cdac] pl-3 rounded-[2px]'>
                                                                                <Typography variant='subtitle1' sx={{fontSize:'12px', fontWeight:'400'}}>
                                                                                      New Laptop  
                                                                                    </Typography>
                                                                                    <Typography variant='subtitle1' sx={{fontSize:'14px', fontWeight:'900'}}>
                                                                                          $10
                                                                                    </Typography>
                                                                      </Box>
                                                                     
                                                                 </Box>
                                                         </Box>
                                              </Box>
                                         </Box>
                                         {/* 1st box */}

                                         {/* 2nd box */}
                                         <Box className='col-span-3 row-span-2 p-8 rounded-xl bg-white'>

                                              <Box className='flex flex-col gap-12'>

                                                      <Box className='flex justify-between'>

                                                            <Typography sx={{fontSize:'20px', fontWeight:'700'}}>
                                                                 Budgets
                                                            </Typography>

                                                                  <SeeDetailsButton>
                                                                  See Details 
                                                                        <ArrowRightIcon></ArrowRightIcon>
                                                                  </SeeDetailsButton>                                                     
                                                      </Box>

                                                         <Box className='flex gap-5 justify-evenly'>
                                                                  <Box>
                                                                     <img src="/assets/graph.jpeg" alt="" />
                                                                  </Box>

                                                                        <Box className='grid gap-4'>

                                                                                          <Box className='border-l-4 border-[#F2CDAC] pl-3 rounded-[2px]'>
                                                                                                <Typography variant='subtitle1' sx={{fontSize:'12px', fontWeight:'400'}}>
                                                                                                      Dining Out   
                                                                                                      </Typography>

                                                                                                      <Typography variant='subtitle1' sx={{fontSize:'14px', fontWeight:'900'}}>
                                                                                                            $75
                                                                                                      </Typography>
                                                                                          </Box>

                                                                                          <Box className='border-l-4 border-[#696868] pl-3 rounded-[2px]'>
                                                                                                <Typography variant='subtitle1' sx={{fontSize:'12px', fontWeight:'400'}}>
                                                                                                         Personal Care  
                                                                                                      </Typography>
                                                                                                      <Typography variant='subtitle1' sx={{fontSize:'14px', fontWeight:'900'}}>
                                                                                                            $100
                                                                                                      </Typography>
                                                                                          </Box>

                                                                                          <Box className='border-l-4 border-[#82C9D7] pl-3 rounded-[2px]'>
                                                                                                <Typography variant='subtitle1' sx={{fontSize:'12px', fontWeight:'400'}}>
                                                                                                      Bills 
                                                                                                      </Typography>
                                                                                                      <Typography variant='subtitle1' sx={{fontSize:'14px', fontWeight:'900'}}>
                                                                                                            $750
                                                                                                      </Typography>
                                                                                          </Box>

                                                                                          <Box className='border-l-4 border-[#277c78] pl-3 rounded-[2px]'>
                                                                                                <Typography variant='subtitle1' sx={{fontSize:'12px', fontWeight:'400'}}>
                                                                                                        Entertainment  
                                                                                                      </Typography>
                                                                                                      <Typography variant='subtitle1' sx={{fontSize:'14px', fontWeight:'900'}}>
                                                                                                            $35 
                                                                                                      </Typography>
                                                                                          </Box>
                                                                                    
                                                                        </Box>
                                                         </Box>
                                               </Box>                                         

                                         </Box>
                                          {/* 2nd box */}
                                          
                                          {/* 3rd box */}
                                          <Box className='col-span-3 row-span-3 p-8 rounded-xl bg-white'>
                                                 <Box className='flex flex-col gap-8'> 
                                                       
                                                      <Box className='flex justify-between'>

                                                            <Typography sx={{fontSize:'20px', fontWeight:'700'}}>
                                                                Transactions
                                                            </Typography>

                                                                  <SeeDetailsButton>
                                                                  See Details 
                                                                        <ArrowRightIcon></ArrowRightIcon>
                                                                  </SeeDetailsButton>                                                     
                                                       </Box>

                                                       <Box className='flex flex-col'>

                                                                  <Box className="flex justify-between pb-5 border-b-2">
                                                                        <Box className="flex gap-[16px] justify-center items-center">
                                                                              <Avatar alt="Remy Sharp" src="/assets/emma.svg" /> 
                                                                              <Typography variant="subtitle1" fontWeight="700" fontSize="14px" className='text-black'>
                                                                              Emma Richardson
                                                                              </Typography>
                                                                        </Box>
                                                                  
                                                                        
                                                                        <Box>
                                                                              
                                                                              <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#277C78]' >
                                                                              +$75.50
                                                                              </Typography>

                                                                              <Typography variant="subtitle1" fontWeight="300" fontSize="12px" className='text-[#696868]' fontFamily="pulic-sans">
                                                                              19 Aug 2024
                                                                              </Typography>

                                                                        </Box>

                                                                  </Box>

                                                                  <Box className="flex justify-between pb-5 border-b-2 pt-5">
                                                                        <Box className="flex gap-[16px] justify-center items-center">
                                                                              <Avatar alt="Remy Sharp" src="/assets/savory.svg" /> 
                                                                              <Typography variant="subtitle1" fontWeight="700" fontSize="14px" className='text-black'>
                                                                                  Savory Bites Bistro
                                                                              </Typography>
                                                                        </Box>
                                                                  
                                                                        
                                                                        <Box>
                                                                              
                                                                              <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" >
                                                                                +$55.50
                                                                              </Typography>

                                                                              <Typography variant="subtitle1" fontWeight="300" fontSize="12px" className='text-[#696868]' fontFamily="pulic-sans">
                                                                                 19 Aug 2024
                                                                              </Typography>

                                                                        </Box>

                                                                  </Box>


                                                                  <Box className="flex justify-between pb-5 border-b-2 pt-5">
                                                                        <Box className="flex gap-[16px] justify-center items-center">
                                                                              <Avatar alt="Remy Sharp" src="/assets/daniel.svg" /> 
                                                                              <Typography variant="subtitle1" fontWeight="700" fontSize="14px" className='text-black' >
                                                                                 Daniel Carter
                                                                              </Typography>
                                                                        </Box>
                                                                  
                                                                        
                                                                        <Box>
                                                                              
                                                                              <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" >
                                                                              -$42.30 
                                                                              </Typography>

                                                                              <Typography variant="subtitle1" fontWeight="300" fontSize="12px" className='text-[#696868]' fontFamily="pulic-sans">
                                                                              18 Aug 2024
                                                                              </Typography>

                                                                        </Box>

                                                                  </Box>


                                                                  <Box className="flex justify-between pb-5 pt-5 border-b-2">
                                                                        <Box className="flex gap-[16px] justify-center items-center">
                                                                              <Avatar alt="Remy Sharp" src="/assets/sun.svg" /> 
                                                                              <Typography variant="subtitle1" fontWeight="700" fontSize="14px" className='text-black'>
                                                                                  Sun Park
                                                                              </Typography>
                                                                        </Box>
                                                                  
                                                                        
                                                                        <Box>
                                                                              
                                                                              <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#277C78]' >
                                                                                +$120.00
                                                                              </Typography>

                                                                              <Typography variant="subtitle1" fontWeight="300" fontSize="12px" className='text-[#696868]' fontFamily="pulic-sans">
                                                                                17 Aug 2024
                                                                              </Typography>

                                                                        </Box>

                                                                  </Box>



                                                                  <Box className="flex justify-between pb-5 pt-5 border-b-2">
                                                                        <Box className="flex gap-[16px] justify-center items-center">
                                                                              <Avatar alt="Remy Sharp" src="/assets/urban.svg" /> 
                                                                                    <Typography variant="subtitle1" fontWeight="700" fontSize="14px" className='text-black' >
                                                                                    Urban Services Hub
                                                                                    </Typography>
                                                                        </Box>
                                                                  
                                                                        
                                                                        <Box>
                                                                              
                                                                              <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" >
                                                                                 +$65.00
                                                                              </Typography>

                                                                              <Typography variant="subtitle1" fontWeight="300" fontSize="12px" className='text-[#696868]' fontFamily="pulic-sans">
                                                                                 17 Aug 2024
                                                                              </Typography>

                                                                        </Box>

                                                                  </Box>
                                                       </Box>
                                                 </Box>
                                          </Box>
                                          {/* 3rd box */}
                                         
                                         {/* 4th box */}
                                         <Box className='col-span-3 p-8 rounded-xl bg-white'>

                                              <Box className='flex flex-col gap-8'>

                                                      <Box className='flex justify-between'>

                                                            <Typography sx={{fontSize:'20px', fontWeight:'700'}}>
                                                                Recurring Bills
                                                            </Typography>

                                                                  <SeeDetailsButton>
                                                                    See Details 
                                                                        <ArrowRightIcon></ArrowRightIcon>
                                                                  </SeeDetailsButton>                                                     
                                                            </Box>

                                                            <Box className='flex flex-col gap-3'>
                                                                  <Box className="flex justify-between bg-[#F8F4F0] p-[20px_16px] rounded-[8px] border-l-4 border-[#277C78]">
                                                                        <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#696868]' >
                                                                        Paid Bills
                                                                        </Typography>

                                                                        <Typography variant="" fontWeight="700" fontSize="14px" className='text-black' >
                                                                        $190.00
                                                                        </Typography>
                                                                   </Box>

                                                                   <Box className="flex justify-between bg-[#F8F4F0] p-[20px_16px] rounded-[8px] border-l-4 border-[#F2CDAC]">
                                                                        <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#696868]' >
                                                                            Total Upcoming
                                                                        </Typography>

                                                                        <Typography variant="" fontWeight="700" fontSize="14px" className='text-black' >
                                                                           $194.98
                                                                        </Typography>
                                                                   </Box>

                                                                   <Box className="flex justify-between bg-[#F8F4F0] p-[20px_16px] rounded-[8px] border-l-4 border-[#82C9D7]">
                                                                        <Typography variant="subtitle1" fontWeight="bold" fontSize="14px" className='text-[#696868]' >
                                                                            Due Soon
                                                                        </Typography>

                                                                        <Typography variant="" fontWeight="700" fontSize="14px" className='text-black' >
                                                                           $59.98
                                                                        </Typography>
                                                                   </Box>
                                                            </Box>
                                              </Box>
                                         </Box>
                                          {/* 4th box */}
                                        
                                    </Box>

                                     {/* Four grid layout */}
                            </Box>

                    </Box>
              {/* overview right white */}
        </Box>

      </Container>     
    </>
  )
}

export default App
