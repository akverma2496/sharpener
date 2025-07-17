import React, { useState } from 'react';
import ComposeMailForm from './ComposeMailForm';
import ComposeMailEditor from './ComposeMailEditor';
import { Button, Container, Card } from 'react-bootstrap';

const ComposeMail = () => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ to, subject, body });
    // your send logic
  };

  const handleClose = () => {
    setTo('');
    setSubject('');
    setBody('');
  };

  return (
    <Container className="mt-5">
      <Card className="shadow rounded">
        {/* add extra bottom padding (pb-5 = 3rem) */}
        <Card.Body className="px-4 pt-4 pb-5">
          {/* header */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h4 className="mb-0">Compose Mail</h4>
            <div className="d-flex gap-2">
              <Button
                variant="primary"
                size="sm"
                type="submit"
                form="compose-form"
              >
                Send
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                type="button"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </div>

          <form id="compose-form" onSubmit={handleSubmit}>
            <ComposeMailForm
              to={to}
              setTo={setTo}
              subject={subject}
              setSubject={setSubject}
            />

            {/* add mb-4 to ensure space below editor */}
            <div className="mb-4">
              <ComposeMailEditor value={body} setValue={setBody} />
            </div>

            {/* now safely centered with margin-top */}
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ComposeMail;
