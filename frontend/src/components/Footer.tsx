import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import PhoneIcon from '@mui/icons-material/Phone';
import styled from 'styled-components';
import { Flex, ipad, mobile } from '../responsive';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Center>
          <List>
            <ListItem>Giới thiệu về công ty</ListItem>
            <ListItem>Câu hỏi thường gặp mua hàng</ListItem>
            <ListItem>Chính sách bảo mật</ListItem>
            <ListItem>Kiểm tra hóa đơn điện tử</ListItem>
            <ListItem>Tra cứu thông tin bảo hành</ListItem>
            <ListItem>Tin khuyến mãi</ListItem>
            <ListItem>Hướng dẫn mua trả góp</ListItem>
            <ListItem>Chính sách trả góp</ListItem>
            <ListItem>Hệ thống cửa hàng</ListItem>
            <ListItem>Chính sách đổi trả</ListItem>
          </List>
        </Center>
        <Right>
          <ContactItem>
            <BedroomBabyIcon style={{ marginRight: '10px' }} />
            Huyện Châu Thành, Tĩnh Sóc Trăng, Số nhà 487
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{ marginRight: '10px' }} /> +0345107487
          </ContactItem>
          <ContactItem>
            <MailOutlineIcon style={{ marginRight: '10px' }} /> truongnhanhao107@gamil.com
          </ContactItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  ${Flex('', 'center')}
  ${ipad({ justifyContent: 'left' })}
  font-size: 12px;
  background-color: #f8f9fa;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1200px;
`;
const Center = styled.div`
  flex: 1;
  padding: 2px 20px;
  color: #448aff;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;
const ContactItem = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  text-decoration: line;
`;
export default Footer;
