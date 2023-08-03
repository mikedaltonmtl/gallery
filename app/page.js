import Splash from './components/Splash';
import Slider from './components/Slider';
import { SliderData } from  './components/SliderData';

export default function Home() {
  return (
    <main className="">
      <Splash
        heading='Romy'
        message='The new dog has arrived!'
      />
      <Slider slides={ SliderData } />
    </main>
  );
}
