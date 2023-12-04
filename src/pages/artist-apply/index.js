import { useState } from 'react';
import {
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { sendArtistApplication } from '../../lib/api';
import PageContainer from '../../components/PageContainer';
import PageTextBox from '../../components/PageTextBox';
import FormContainer from '../../components/FormContainer';
import ContactButton from '../../components/ContactButton';

const initValues = {
  name: '',
  email: '',
  phone: '',
  tshirt_size: '',
  message: '',
};
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
    <PageContainer heading={'Artist Application'}>
      <PageTextBox sx={{ marginBottom: 0 }}>
        Now accepting applications for 2024! The Bridgetown Bluegrass & Folk
        Festival seeks hard-working artists that are actively creating new and
        original music, and demonstrate a commitment to bringing that music to
        the public through consistent live performance. In this submission form,
        tell us about yourself/your band, send us links to your music, and show
        us what you<span>&#39;</span>ve been up to. Submissions for Bridgetown
        2024 close on March 1, 2024. All artists will be offered at least one 30
        minute set, wristbands for the day of the fest, access to Bridgetown
        Green Room and Hospitality Lounges, and a +1 per band member.
        <br /> <span>&emsp;&emsp;</span>
        RADIUS CLAUSE: All artists confirmed for Bridgetown 2024 will be asked
        to not play any other Portland area <span>&#40;</span>100 mile radius
        <span>&#41;</span> shows in the festival month <span>&#40;</span>TBD
        <span>&#41;</span> of 2024 and to not announce any other Portland area
        shows in the following month 2024 and beyond until after their set at
        the festival. We are open to exceptions to this request, but ask that
        they are discussed with us before confirming your appearance.
      </PageTextBox>
      {error && (
        <Text color='red.300' my={4} fontSize='xl'>
          {error}
        </Text>
      )}
      <FormContainer>
        <GridItem colSpan={1}>
          <FormControl isRequired isInvalid={touched.name && !values.name}>
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
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl
            isRequired
            isInvalid={touched.hometown && !values.hometown}
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
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl
            isRequired
            isInvalid={touched.bio && !values.bio}
            mb={[1, null, null, 2]}
          >
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
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl
            isRequired
            isInvalid={touched.website && !values.website}
          >
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
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl isRequired isInvalid={touched.email && !values.email}>
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
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl isRequired isInvalid={touched.phone && !values.phone}>
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
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl isRequired isInvalid={touched.video && !values.video}>
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
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl isRequired isInvalid={touched.social && !values.social}>
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
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
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
        </GridItem>

        <GridItem colSpan={2}>
          <Center>
            <ContactButton
              isLoading={isLoading}
              disabled={
                !values.name ||
                !values.hometown ||
                !values.bio ||
                !values.website ||
                !values.email ||
                !values.phone ||
                !values.video ||
                !values.social ||
                !values.message
              }
              onClick={onSubmit}
            >
              Send Message to Applications Crew
            </ContactButton>
          </Center>
        </GridItem>
      </FormContainer>
    </PageContainer>
  );
};

export default ArtistApply;
