import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}
export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}><div className="page__loader"><Loader /></div></div>
  );
};
