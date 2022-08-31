import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetUpHandler = (data) => {
    console.log(data);
  };

  return <NewMeetupForm onAddMeetup={addMeetUpHandler} />;
};

export default NewMeetupPage;
