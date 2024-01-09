import { AiFillCloseSquare } from 'react-icons/ai';
import  cx  from '../utils';

export default function CloseModal({ className }: { className?: string }) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
      <AiFillCloseSquare className={cx('h-8 w-8 transition-all ease-in-out hover:scale-110 ', className)} />
    </div>
  );
}