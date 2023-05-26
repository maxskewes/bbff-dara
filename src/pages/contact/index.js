import { useState } from 'react';
import {
  Button,
  Container,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { sendContactForm } from '../../lib/api';
import PageContainer from '../../components/PageContainer';
import FormContainer from '../../components/FormContainer';
import PageTextBox from '../../components/PageTextBox';

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
        title: 'Message sent.',
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
      <PageTextBox>
        Please feel free to contact us with any further questions about the
        festival.
      </PageTextBox>
      <PageTextBox>
        Vendors: please use this form to let us know what your trade is and in
        what capacity you would like to be involved.
      </PageTextBox>
      {error && (
        <Text color='red.300' my={4} fontSize='xl'>
          {error}
        </Text>
      )}

      <FormContainer>
        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Name</FormLabel>
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

        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.subject && !values.subject}
        >
          <FormLabel>Subject</FormLabel>
          <Input
            type='text'
            name='subject'
            errorBorderColor='red.300'
            value={values.subject}
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
        <Center>
          <Button
            variant='outline'
            colorScheme='blue'
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
          </Button>
        </Center>
      </FormContainer>
    </PageContainer>
  );
}
