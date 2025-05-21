import './SearchPanel.scss';
import { useClickOutside } from '@shared/hooks/useClickOutside';
import { useRef, useState } from 'react';
import { FaFacebook, FaSearch } from 'react-icons/fa';
import { useSearch } from '../hooks/useSearch';


export default function SearchPanel() {
    const panelRef = useRef<HTMLDivElement>(null);
    const [isIntput, setIsIntput] = useState(false);

    const [query, setQuery] = useState('');
    const { results, loading } = useSearch(query);
    useClickOutside(panelRef, () => {
        setIsIntput(false);
    });

    return (
        <>
            <div className="d-flex align-items-center" ref={panelRef}>
                <FaFacebook color="#1877F2" size={40} className="me-3" />
                <div className="search-wrapper">
                    <div className="search-input" onClick={() => setIsIntput(true)}>
                        <FaSearch color="#65676B" className="me-2" />
                        <input
                            type="text"
                            placeholder="搜尋 Facebook"
                            onFocus={() => setIsIntput(true)}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
                {isIntput && (
                    <div className="search-panel">
                        {loading ? <li>載入中...</li> : results.map(user => (
                            <div key={user.userId} className="panel-item">
                                <span>{user.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </>

    );
}
