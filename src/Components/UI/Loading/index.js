import ReactLoading from 'react-loading';

import styles from './styles';

export default function Loading() {
    return (
        <div style={styles.root}>
            <ReactLoading type={'spin'} color={styles.color} height={100} width={100} />
        </div>
    )
};
