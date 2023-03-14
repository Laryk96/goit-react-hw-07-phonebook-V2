import { useDeleteContactMutation } from 'redux/contactsSlice';
import {
  Button,
  ContactItem,
  ContactName,
  Icons,
  Wrapper,
} from './ContactItem.styled';

const Contact = ({ id, name, phone }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ContactItem>
      <Wrapper>
        <Icons>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
            alt="avatar"
            width={35}
          />
        </Icons>
        <ContactName>{name}</ContactName>
      </Wrapper>
      <span>{phone}</span>
      <Button
        type="button"
        aria-label="Delete"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </Button>
    </ContactItem>
  );
};

export default Contact;
