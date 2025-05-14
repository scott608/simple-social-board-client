import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { RegisterDto } from '../types/RegisterDto';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Gender } from '@shared/types/enum/Gender';


// 使用 yup 定義驗證規則
const schema = yup.object({
  account: yup.string()
    .min(3, '帳號最少 3 字元')
    .max(16, '帳號最多 16 字元')
    .required('請輸入帳號'),
  password: yup.string()
    .min(6, '密碼至少6位')
    .required('請輸入密碼'),
  name: yup.string().required('請輸入姓名'),
  email: yup.string().email('信箱格式錯誤').required('請輸入信箱'),
  birthday: yup.string().required('請輸入生日'),
  gender: yup.number()
    .oneOf([0, 1], '請選擇性別')
    .required('請選擇性別'),
}).required();


export default function RegisterComponent({
  onSubmit
}: {

  onSubmit: ((data: RegisterDto) => void);
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: 0, 
    },
    resolver: yupResolver(schema),
  });
  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={9} md={6} lg={4}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h2 className="text-center mb-4">註冊會員</h2>
              <Form onSubmit={handleSubmit((data) => {
                const payload: RegisterDto = {
                  ...data,
                  gender: Number(data.gender) as Gender,
                };
                onSubmit(payload);
              })} noValidate>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="name" visuallyHidden>姓名</Form.Label>
                  <Form.Control
                    id="name"
                    type="text"
                    placeholder="姓名"
                    {...register('name')}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email" visuallyHidden>信箱</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    placeholder="信箱"
                    {...register('email')}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <div className="d-flex justify-content-between">
                    <div className="btn-group w-100" role="group" aria-label="性別">
                      <input
                        type="radio"
                        className="btn-check"
                        id="genderMale"
                        value="0"
                        {...register('gender')}
                      />
                      <label className="btn btn-outline-primary w-50" htmlFor="genderMale">
                        男性
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        id="genderFemale"
                        value="1"
                        {...register('gender')}
                      />
                      <label className="btn btn-outline-primary w-50" htmlFor="genderFemale">
                        女性
                      </label>
                    </div>
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="birthday" visuallyHidden>生日</Form.Label>
                  <Form.Control
                    id="birthday"
                    type="date"
                    placeholder="生日"
                    {...register('birthday')}
                    isInvalid={!!errors.birthday}
                  />
                  <Form.Control.Feedback type="invalid">{errors.birthday?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="account" visuallyHidden>帳號</Form.Label>
                  <Form.Control
                    id="account"
                    type="text"
                    placeholder="帳號"
                    {...register('account')}
                    isInvalid={!!errors.account}
                  />
                  <Form.Control.Feedback type="invalid">{errors.account?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label htmlFor="password" visuallyHidden>密碼</Form.Label>
                  <Form.Control
                    id="password"
                    type="password"
                    placeholder="密碼"
                    {...register('password')}
                    isInvalid={!!errors.password}
                    autoComplete="current-password"
                  />
                  <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>

                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
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
