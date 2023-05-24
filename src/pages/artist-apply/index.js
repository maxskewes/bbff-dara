import { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { sendArtistApplication } from '../../lib/api';
import PageContainer from '../../components/PageContainer';

const initValues = { name: '', email: '', phone: '', tshirt_size: '', message: '' };
const initState = { isLoading: false, error: '', values: initValues };

const ArtistApply = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendArtistApplication(values);
      setTouched({});
      setState(initState);
      toast({
        title: 'Artist Application message sent.',
        status: 'success',
        duration: 2000,
        position: 'top',
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <PageContainer>
      <Container width={['600px']}>
        <Heading>Artist Application</Heading>
        <Text>
        Now accepting applications for 2023!

The Bridgetown Bluegrass & Folk Festival seeks hard-working artists that are actively creating new and original music, and demonstrate a commitment to bringing that music to the public through consistent live performance.

In this submission form, tell us about yourself/your band, send us links to your music, and show us what you’ve been up to. Submissions for Bridgetown 2023 close on March 1, 2023.

All artists will be offered at least one 30 minute set, wristbands for the day of the fest, access to Bridgetown Green Room and Hospitality Lounges, and a +1 per band member.

RADIUS CLAUSE: All artists confirmed for Bridgetown 2023 will be asked to not play any other Portland area (100 mile radius) shows in the festival month (TBD) of 2023 and to not announce any other Portland area shows in the following month 2023 and beyond until after their set at the festival. We are open to exceptions to this request, but ask that they are discussed with us before confirming your appearance.
        </Text>
        {error && (
          <Text color='red.300' my={4} fontSize='xl'>
            {error}
          </Text>
        )}

        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Artist/Band Name</FormLabel>
          <Input
            type='text'
            name='name'
            errorBorderColor='red.300'
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.hometown && !values.hometown}
          mb={5}
        >
          <FormLabel>Hometown</FormLabel>
          <Input
            type='text'
            name='hometown'
            errorBorderColor='red.300'
            value={values.hometown}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Field Required - please revisit</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.bio && !values.bio} mb={5}>
          <FormLabel>Bio</FormLabel>
          <Textarea
            type='text'
            name='bio'
            rows={4}
            errorBorderColor='red.300'
            value={values.bio}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.website && !values.website} mb={5}>
          <FormLabel>Website</FormLabel>
          <Input
            type='text'
            name='website'
            errorBorderColor='red.300'
            value={values.website}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.email && !values.email}
          mb={5}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            name='email'
            errorBorderColor='red.300'
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.phone && !values.phone} mb={5}>
          <FormLabel>Contact Phone Number</FormLabel>
          <Input
            type='number'
            name='phone'
            errorBorderColor='red.300'
            value={values.phone}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.video && !values.video}
        >
          <FormLabel>Video URL</FormLabel>
          <Input
            type='text'
            name='video'
            errorBorderColor='red.300'
            value={values.video}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.social && !values.social}
        >
          <FormLabel>Social Media Sites</FormLabel>
          <Textarea
            type='text'
            name='social'
            rows={2}
            errorBorderColor='red.300'
            value={values.social}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          mb={5}
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            type='text'
            name='message'
            rows={4}
            errorBorderColor='red.300'
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Field Required - please revisit</FormErrorMessage>
        </FormControl>

        <Button
          variant='outline'
          colorScheme='blue'
          isLoading={isLoading}
          disabled={
            !values.name || !values.hometown || !values.bio || !values.website || !values.email || !values.phone || !values.video || !values.social || !values.message
          }
          onClick={onSubmit}
        >
          Send Message to BBFF Volunteer Crew
        </Button>
      </Container>
    </PageContainer>
  );
};

export default ArtistApply;
