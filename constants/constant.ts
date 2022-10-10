export const TabList = [
  {
    title: 'DAY1',
    subTitle: '10월 13일(목)',
  },
  {
    title: 'DAY2',
    subTitle: '10월 14일(금)',
  },
];

export const ScheduleDayList = [
  [
    {
      src: '/images/go.png',
      title: '지각하시면 안되요!',
      subTitle:
        '오전 11시 강남역 1번출구에서 버스를 타고 출발할 예정이에요. \n아 맞다! 콜라비 맨투맨티를 안 입고 오시면 못 타요.',
      time: '10월 13일 오전 11시',
    },
    {
      src: '/images/walk.png',
      title: '점심은 역시 든든하게',
      subTitle:
        '가는 길에 대부도에 위치한 한정식집인 벚나무집에 들릴 예정이에요. \n모둠생선구이정식이 예약되어 있어요. 만약 생선을 못드시더라도 반찬이 다양한 한정식집이니 큰 걱정 하지마세요.',
      time: '10월 13일 오후 12시 30분',
    },
    {
      src: '/images/dance.png',
      title: '저희 같은 팀인가요?',
      subTitle:
        '각자 사용하실 층과 방을 정할 예정이에요.\n이후 행사 일정과 레크레이션 팀을 알려드릴 예정이에요.',
      time: '10월 13일 오후 2시 ~ 3시',
    },
    {
      src: '/images/finger.png',
      title: 'FREE TIME!',
      subTitle:
        '수영, 당구, 족구, 노래방, 사우나, 스크린 골프, 트렘펄린 등 윈도우즈 월드 D의 다양한 시설을 즐겨보세요. 피곤하시면 잠시 올라가서 낮잠은 어떠실까요?',
      time: '10월 13일 오후 3시 ~ 4시 30분',
    },
    {
      src: '/images/play.png',
      title: '오늘만큼은 봐주기 없습니다.',
      subTitle:
        '팀원들과 함께 저희가 준비한 레크레이션을 하는 시간 입니다. 밤에 마실 수 있는 다양한 술이 경품으로 걸려 있어요. 꼴지 팀은 아침에 일어나 아침 준비를 해야해요.',
      time: '10월 13일 오후 5시 30분 ~ 6시 30분',
    },
    {
      src: '/images/dog.png',
      title: '저녁 식사 및 파티',
      subTitle:
        '맛있는 고기와 다양한 술, 안주가 준비되어 있어요.\n1부는 소고기, 돼지고기, 새우, 찌개류와 함께 K-바베큐 가 준비되어 있으며 \n2부는 샤인머스켓, 멜론, 하몽, 감바스, 치즈 플레터 등 다양한 핑거푸드가 준비되어 있습니다.\n아 맞다! 플레이샵 한정 이벤트 경품 발표도 준비되어 있으니 사이트 하단 이벤트를 꼭 참여해주세요.',
      time: '10월 13일 오후 7시',
    },
  ],
  [
    {
      src: '/images/hand.png',
      title: '일어나세요.. 용사여...',
      subTitle: '숙취 해소제와 라면이 준비되어 있으니 너무 걱정하지 마세요.',
      time: '10월 14일 오전 8 ~ 9시',
    },
    {
      src: '/images/girl.png',
      title: '이제 집에 가야해요.',
      subTitle:
        '진짜 일어나서 씻고 자신이 머물렀던 방을 정리해주세요. 코로나 방역으로 인해 퇴실이 늦어지면 안되니 부지런하게 정리해주세요.',
      time: '10월 13일 오후 10 ~ 11시',
    },
    {
      src: '/images/meditation.png',
      title: '점심식사',
      subTitle:
        '버스탑승 후 가는 길에 대부도에 위치한 원조16호 칼국수집에 들릴 에정이에요. 전날의 숙취를 잊고자 시원한 황제 칼국수를 준비해봤어요. 테이블 당 황제칼국수와 해물파전이 준비되어 있어요.',
      time: '10월 13일 오후 11시 30분',
    },
    {
      src: '/images/meet.png',
      title: '안녕은 영원한 헤어짐은 아니겠지요~',
      subTitle:
        '모두 고생 많았고 즐거웠어요. 함께 빠르게 짐 챙겨서 귀가합시다!',
      time: '10월 13일 오후 2시',
    },
  ],
];

export const queryKey = {
  manitto: ['manitto'] as const,
};

export const sizes = {
  mobile: '500px',
  tablet: '768px',
  laptop: '1440px',
};

export const devices = {
  mobile: `(max-width:${sizes.mobile})`,
  tablet: `(max-width:${sizes.tablet})`,
  laptop: `(max-width:${sizes.laptop})`,
};
