import { Container, List } from '@mantine/core';

function DescriptionList() {
  return (
    <Container>
      <List>
        <List.Item style={{ marginBottom: '12px' }}>
          <span style={{ fontWeight: 'bold', color: '#228be6' }}>
            부모의 유전 조합
          </span>
          을 이용하여 확률을 계산해줍니다.
        </List.Item>
        <List.Item style={{ marginBottom: '12px' }}>
          해당 계산기에서 &quot;모프&quot;란{' '}
          <span style={{ fontWeight: 'bold', color: '#228be6' }}>
            대립유전자로 유전되는 것
          </span>
          을 의미합니다. 할리퀸, 핀, 월 등은 계산할 수 없습니다.
        </List.Item>
        <List.Item style={{ marginBottom: '12px' }}>
          헷 66%, 헷 50% 등은 유전 모프가 아닌{' '}
          <span style={{ fontWeight: 'bold', color: '#228be6' }}>
            확률을 나타내는 것
          </span>
          으로{' '}
          <span style={{ fontWeight: 'bold', color: '#228be6' }}>
            계산할 수 없습니다.
          </span>
        </List.Item>
        <List.Item style={{ marginBottom: '12px' }}>
          크레스티드 게코는 성별에 따라 확률이 달라지는 모프가 없습니다!
          아무쪽에나 편하게 입력해주세요!
        </List.Item>
        <List.Item style={{ marginBottom: '12px' }}>
          궁금증은{' '}
          <a
            href='https://www.instagram.com/sherry._.butt/'
            style={{ textDecoration: 'none' }}
          >
            인스타그램 DM
          </a>{' '}
          혹은 같은 톡방에 계시거나 카톡 친구가 되어있다면 편하게 질문 주세요:)
        </List.Item>
      </List>
    </Container>
  );
}

export default DescriptionList;
// rgb(153, 233, 242)
