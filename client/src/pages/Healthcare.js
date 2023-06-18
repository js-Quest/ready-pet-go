import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import ScrollToTop from '../components/ScrollTop';


export default function Healthcare() {
    return (
        <ScrollToTop>
            <Box sx={{
                flexGrow: 1,
                marginTop: '2.6em',
                maxWidth: '75%',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                <Grid container spacing={1}
                    justifyContent='space-evenly'
                    alignItems='flex-start'>
                    <Card sx={{
                        maxWidth: { xs: '98%', md: '80%', lg: 700 },
                        marginTop: 2
                    }}
                    >
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{
                                    color: '#36393F',
                                    fontSize: '24px',
                                    textAlign: 'center'
                                }}
                            >
                                Vaccinations
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Vaccinations are an essential aspect of preventive health care for your pets. They protect them from various contagious and potentially life-threatening diseases. Common vaccines for puppies include those for distemper, parvovirus, canine hepatitis, and rabies. For kittens, common vaccines include those for feline panleukopenia, feline herpesvirus, feline calicivirus, and rabies. It's important to follow your veterinarian's recommended vaccination schedule to ensure that your pets are adequately protected.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: { xs: '98%', md: '80%', lg: 700 }, marginTop: 2 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div"
                                sx={{ textAlign: 'center' }}
                            >
                                Preventative Care
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Preventative care plays a crucial role in keeping your pets healthy and avoiding common health issues. Regular visits to the veterinarian for wellness check-ups and screenings are recommended. Your vet may recommend preventive measures such as flea and tick control, heartworm prevention, and routine deworming to protect your pets from parasites. Additionally, maintaining good dental hygiene, providing a balanced diet, and regular exercise are vital for pets' overall well-being.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: { xs: '98%', md: '80%', lg: 700 }, marginTop: 2 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div"
                                sx={{ textAlign: 'center' }}
                            >
                                Supplements and Medications
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Supplements and medications can support your pet's health in various ways. However, it's important to consult with your veterinarian before introducing any new supplements or medications. Common supplements for pets include omega-3 fatty acids for coat and joint health, probiotics for gut health, and glucosamine/chondroitin for joint support. Medications may include treatments for fleas, ticks, heartworms, and specific conditions or illnesses your pet may encounter.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: { xs: '98%', md: '80%', lg: 700 }, paddingLeft: 2, marginTop: 2 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div"
                                sx={{ textAlign: 'center' }}
                            >
                                Foods to Avoid Feeding Your Little Ones
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                While it's essential to provide a balanced diet for your puppy or kitten, there are certain foods you should <strong>never</strong> feed them, as they can be harmful or toxic. These include:
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <ol>
                                    <li>Chocolate: Contains theobromine, which is toxic to pets.</li>
                                    <li>Grapes and raisins: Can cause kidney damage.</li>
                                    <li>Onions and garlic: Can lead to anemia and other health issues.</li>
                                    <li>Avocado: Contains persin, which is toxic to pets.</li>
                                    <li>Alcohol: Can cause severe intoxication and even coma.</li>
                                    <li>Xylitol: Found in sugar-free gum and certain foods, it is toxic to pets.</li>
                                    <li>Caffeine: Found in coffee, tea, and energy drinks, it can be harmful to pets.</li>
                                    <li>Bones: Cooked bones can splinter and cause choking or internal injuries.</li>
                                    <li>Raw or undercooked meat, eggs, or fish: Can contain harmful bacteria and parasites.</li>
                                    <li>Dairy products: Many pets are lactose intolerant and can experience digestive issues.</li>
                                </ol>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid >
            </Box>
        </ScrollToTop>
    )
}



