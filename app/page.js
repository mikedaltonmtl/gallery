import Splash from './components/Splash';
import Slider from './components/Slider';
import Contact from './components/Contact';
import { SliderData } from  './components/SliderData';

export default function Home() {
  return (
    <main className="">
      <Splash
        heading='Romy'
        message='The new dog has arrived!'
      />
      <Slider slides={ SliderData } />
      <Contact />
    </main>
  );
}
