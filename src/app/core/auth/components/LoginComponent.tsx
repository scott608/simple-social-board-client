// import React from 'react';
// import { Link } from 'react-router-dom';

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function LoginComponent(
  {
    account,
    password,
    setAccount,
    setPassword,
    onSubmit
  }: {
    account: string;
    password: string;
    setAccount: (value: string) => void;
    setPassword: (value: string) => void;
    onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
) {
  return (

    // Container 是 Bootstrap 的一個組件，用於創建一個響應式的容器
    // 這個容器會根據屏幕大小自動調整其寬度和邊距
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      {/* Row 是 Bootstrap 的一個組件，用於創建一個行 */}
      {/* Row 組件會自動處理行內的列的排列和對齊   */}
      <Row className="w-100 justify-content-center">
        {/* Col 是 Bootstrap 的一個組件，用於創建一個列 */}
        {/* Col 組件會自動處理列的寬度和對齊 */}
        {/* xs, md,.. 是 Bootstrap 的響應式類別，用於控制列在不同屏幕大小下的寬度 12為整行*/}
        <Col xs={12} sm={9} md={6} lg={5} xl={4} xxl={3}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h2 className="text-center mb-4">登入您的帳戶</h2>
              <Form >
                <Form.Group className="mb-3" controlId="formAccount">
                  <Form.Control
                    type="text"
                    placeholder="帳號"
                    required
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder="密碼"
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100"
                  onClick={onSubmit}>
                  登入
                </Button>
              </Form>

              <div className="text-center mt-4">
                <span className="text-muted">還不是會員？ </span>
                <Link to="/auth/register">點此註冊</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )

}
