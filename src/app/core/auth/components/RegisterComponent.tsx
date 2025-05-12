import { Gender } from '@shared/types/enum/Gender';
import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RegisterComponen({
  account,
  password,
  name,
  email,
  gender,
  birthday,
  setAccount,
  setPassword,
  setName,
  setEmail,
  setGender,
  setBirthday,
  onSubmit
}: {
  account: string;
  password: string;
  name: string;
  email: string;
  gender: Gender;
  birthday: string;
  setAccount: (value: string) => void;
  setPassword: (value: string) => void;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setGender: (value: Gender) => void;
  setBirthday: (value: string) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={9} md={6} lg={4}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h2 className="text-center mb-4">註冊會員</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="姓名"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="信箱"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <div className="d-flex justify-content-between">
                    <div className="btn-group w-100" role="group" aria-label="性別">
                      <input
                        type="radio"
                        className="btn-check"
                        name="gender"
                        id="genderMale"
                        value="0"
                        checked={gender === 0}
                        onChange={(e) => setGender(Number(e.target.value) as Gender)}
                      />
                      <label className="btn btn-outline-primary w-50" htmlFor="genderMale">
                        男性
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="gender"
                        id="genderFemale"
                        value="1"
                        checked={gender === 1}
                        onChange={(e) => setGender(Number(e.target.value) as Gender)}
                      />
                      <label className="btn btn-outline-primary w-50" htmlFor="genderFemale">
                        女性
                      </label>
                    </div>
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="date"
                    placeholder="生日"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="帳號"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    type="password"
                    placeholder="密碼"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100"
                  onClick={onSubmit}>
                  點此註冊
                </Button>

                <div className="text-center mt-4">
                  <span className="text-muted">已有帳戶？</span>{' '}
                  <Link to="/auth/login">點此登入</Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )

}
