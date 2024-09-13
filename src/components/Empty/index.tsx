import empty from '@/assets/svg/other/empty.svg'
import './index.scss';

const Empty = ({ info }: { info: string }) => {
    return (
        <div className='EmptyComponent py-12'>
            <div className="w-52 mx-auto mt-5">
                <img src={empty.src} alt="空状态" />
                <div className="pt-5 text-center text-gray-700 dark:text-white">{info}</div>
            </div>
        </div>
    );
};

export default Empty;
