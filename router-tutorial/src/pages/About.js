// import {useLocation} from 'react-router-dom'
import {useSearchParams} from 'react-router-dom'


// const About = () => {
//   return (
//     <div>
//       <h1>소개</h1>
//       <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
//     </div>
//   );
// };

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');
  // const location = useLocation();

  const onToggleDtail = () => {
    setSearchParams({mode, detail:detail === 'true' ? false : true});
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({mode:nextMode, detail});
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDtail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      {/* <p>쿼리스트링: {location.search}</p> */}
    </div>
  );
};

export default About;