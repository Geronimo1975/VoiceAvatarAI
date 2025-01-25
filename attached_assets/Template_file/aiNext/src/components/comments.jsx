import React from 'react'
import user_1 from "../assets/img/us-1.jpg"
import user_2 from "../assets/img/us-2.jpg"
import user_3 from "../assets/img/us-3.jpg"

const commentData = [
    {
        id: 1,
        img: user_1,
        name: "John Jones",
        date: "April 24, 2019 at 10:59 am",
        comment: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",
        replay: [
            {
                id: 1,
                img: user_2,
                name: "JSteven Smith",
                date: "April 24, 2020 at 10:59 am",
                comment: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",
                replay: [
                    {
                        id: 1,
                        img: user_3,
                        name: "Sarah Taylor",
                        date: "April 24, 2020 at 10:59 am",
                        comment: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.",
                    }
                ]
            }
        ]
    }
]
const Comments = () => {
    return (
        <ol className="comment-list">
            <li className="comment">
                {
                    commentData.map(({ id, date, comment, img, name, replay }) => {
                        return (
                            <div key={id}>
                                <CommentCard key={id} date={date} comment={comment} img={img} name={name} />
                                {
                                    replay?.map(({ id, date, comment, img, name, replay }) => {
                                        return (
                                            <ol className="children">
                                                <li className="comment">
                                                    <CommentCard key={id} date={date} comment={comment} img={img} name={name} />
                                                    {
                                                        replay?.map(({ id, date, comment, img, name, replay }) => {
                                                            return (
                                                                <ol className="children">
                                                                    <li className="comment">
                                                                        <CommentCard key={id} date={date} comment={comment} img={img} name={name} />
                                                                    </li>
                                                                </ol>
                                                            )
                                                        })
                                                    }
                                                </li>
                                            </ol>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </li>
        </ol>
    )
}

export default Comments


const CommentCard = ({ img, name, comment, date }) => {
    return (
        <article className="comment-body">
            <footer className="comment-meta">
                <div className="comment-author vcard">
                    <img src={img} className="avatar" alt="image" />
                    <b className="fn">{name}</b>
                </div>

                <div className="comment-metadata">
                    <span>{date}</span>
                </div>
            </footer>

            <div className="comment-content">
                <p>{comment}</p>
            </div>

            <div className="reply">
                <a href="#" className="comment-reply-link">Reply</a>
            </div>
        </article>
    )
}