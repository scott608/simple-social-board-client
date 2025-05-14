import './SearchPanel.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { useClickOutside } from '@shared/hooks/useClickOutside';
import { useRef, useState } from 'react';
import { useSearch } from '../hooks/useSearch';

interface Props {
    onClose: () => void;
}

export default function SearchPanel({ onClose }: Props) {
    const panelRef = useRef<HTMLDivElement>(null);
    const [query, setQuery] = useState('');
    const { results, loading } = useSearch(query);

    useClickOutside(panelRef, onClose);

    return (
        <div ref={panelRef} className="search-panel shadow">
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                <button className="btn btn-light" onClick={onClose}>
                    <FaArrowLeft size={24} />
                </button>
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="搜尋"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="search-content px-3 py-2">
                <ul className="list-unstyled">
                    {loading ? <li>載入中...</li> : results.map(user => (
                        <li className="py-2 border-bottom" key={user.userId}>{user.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
