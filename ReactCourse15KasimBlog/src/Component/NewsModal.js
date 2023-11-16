import React, {useState} from 'react';

const NewsModal = ({blog, onClose, showModal}) => {
    const [favorited, setFavorited] = useState(false);

    const handleFavoriteClick = () => {


        const updatedData = {
            kategoriId: blog.kategoriId,
            baslik: blog.baslik,
            aciklama: blog.aciklama,
            resim: blog.resim,
            favoriSayisi: blog.favoriSayisi + 1,
            banner: blog.banner,
            date: blog.date,
            tag: blog.tag,
        };


        fetch(`http://localhost:3000/bloglar/${blog.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Favori eklendi:', data);
                setFavorited(true);

            })
            .catch(error => console.error('Favori ekleme hatası:', error));

    };


    return (
        <div
            className={`modal fade ${showModal ? 'show' : ''}`}
            tabIndex="-1"
            role="dialog"
            style={{display: showModal ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{blog.baslik}</h5>
                        <button type="button" className="close" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {blog.resim && <img src={blog.resim} alt={blog.baslik} className="img-fluid"/>}
                        <p>{blog.aciklama}</p>
                        <div className="fh5co_consectetur">
                            <i className="fa fa-heart-o"></i> {blog.favoriSayisi}
                        </div>

                        <div className="fh5co_consectetur">
                            <i className="fa fa-clock-o"></i> {blog.date}
                        </div>
                        {!favorited && (
                            <button type="button" className="btn btn-primary" onClick={handleFavoriteClick}>
                                Favoriye Ekle
                            </button>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Kapat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsModal;
