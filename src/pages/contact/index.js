import { useState } from 'react';
import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
  GridItem,
} from '@chakra-ui/react';
import { sendContactForm } from '../../lib/api';
import PageContainer from '../../components/PageContainer';
import FormContainer from '../../components/FormContainer';
import ContactButton from '../../components/ContactButton';

const initValues = { name: '', email: '', subject: '', message: '' };

const initState = { isLoading: false, error: '', values: initValues };

export default function Contact() {
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
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: 'Your message has been sent to the BBFF Crew.',
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
    <PageContainer heading={'Contact'}>
      <Box
        color='white'
        textAlign={'center'}
        letterSpacing={[1, null, null, 1.5]}
        maxW={['600px', null, null, null, '800px']}
        fontSize={['sm', null, 'md', 'lg']}
      >
        <Text>
          Please feel free to contact us with any further questions about the
          festival.
        </Text>
        <Text padding={4}>
          Vendors: please use this form to let us know what your trade is and in
          what capacity you would like to be involved.
        </Text>
      </Box>
      {error && (
        <Text color='red.600' my={4} fontSize='xl'>
          {error}
        </Text>
      )}

      <FormContainer>
        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Name</FormLabel>
          <Input
            type='text'
            name='name'
            errorBorderColor='red.600'
            value={values.name}
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
            errorBorderColor='red.600'
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <GridItem colSpan={2}>
          <FormControl
            mb={5}
            isRequired
            isInvalid={touched.subject && !values.subject}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              type='text'
              name='subject'
              errorBorderColor='red.600'
              value={values.subject}
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
            mb={5}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              type='text'
              name='message'
              rows={4}
              errorBorderColor='red.600'
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Field Required - please revisit</FormErrorMessage>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Center flexDirection={'column'}>
            {error && (
              <Text color='red.600' my={4} fontSize='xl'>
                {error}
              </Text>
            )}
            <ContactButton
              isLoading={isLoading}
              disabled={
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              onClick={onSubmit}
            >
              Send Message to BBFF Crew
            </ContactButton>
          </Center>
        </GridItem>
      </FormContainer>
    </PageContainer>
  );
}
