import { useState } from 'react'

function CommentItem({ comment, currentUser, onReply, onDelete }) {
  const [isReplying, setIsReplying] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [likes, setLikes] = useState(comment.likesCount || 0)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleReplySubmit = (e) => {
    e.preventDefault()
    if (!replyText.trim()) return
    onReply(comment.id, replyText)
    setReplyText('')
    setIsReplying(false)
  }

  return (
    <div className="flex gap-4 group">
      {/* User Avatar */}
      <img
        src={comment.author?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'}
        alt={comment.author?.name}
        className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-100 flex-shrink-0"
      />

      <div className="flex-1">
        {/* Comment Box */}
        <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-gray-900">{comment.author?.name}</span>
              {comment.author?.role === 'admin' && (
                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Admin
                </span>
              )}
            </div>
            <span className="text-xs text-gray-400">{comment.createdAt}</span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {comment.content}
          </p>
        </div>

        {/* Comment Actions Bar */}
        <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mt-2 ml-2">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 hover:text-indigo-600 transition cursor-pointer ${
              isLiked ? 'text-indigo-600 font-bold' : ''
            }`}
          >
            <i className={`fa-${isLiked ? 'solid' : 'regular'} fa-heart text-sm`}></i>
            <span>{likes > 0 && likes} Like</span>
          </button>

          {/* Reply Toggle */}
          <button
            onClick={() => setIsReplying(!isReplying)}
            className="hover:text-indigo-600 transition cursor-pointer"
          >
            Reply
          </button>

          {/* Delete Button (Owner / Admin authorization check) */}
          {(currentUser?.id === comment.author?.id || currentUser?.role === 'admin') && (
            <button
              onClick={() => onDelete(comment.id)}
              className="hover:text-red-600 transition cursor-pointer text-gray-400 ml-auto"
              title="Delete comment"
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
          )}
        </div>

        {/* Inline Reply Form */}
        {isReplying && (
          <form onSubmit={handleReplySubmit} className="mt-3 flex gap-2">
            <input
              type="text"
              placeholder={`Replying to @${comment.author?.name}...`}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="flex-1 text-sm border rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              autoFocus
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold text-xs px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
            >
              Post
            </button>
            <button
              type="button"
              onClick={() => setIsReplying(false)}
              className="text-gray-500 font-semibold text-xs px-3 py-2 rounded-xl hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </form>
        )}

        {/* Nested Replies Rendering */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 space-y-4 border-l-2 border-gray-100 pl-4">
            {comment.replies.map((reply) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                currentUser={currentUser}
                onReply={onReply}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function CommentSection({ currentUser, postId }) {
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState([
    {
      id: '1',
      author: {
        id: '101',
        name: 'Alex Morgan',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
        role: 'user',
      },
      content: 'This was such a thorough guide! Really loved the modern architecture breakdown.',
      createdAt: '2 hours ago',
      likesCount: 5,
      replies: [
        {
          id: '1-1',
          author: {
            id: '102',
            name: 'Sarah Jenkins',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
            role: 'admin',
          },
          content: 'Thanks Alex! Glad you enjoyed the article.',
          createdAt: '1 hour ago',
          likesCount: 2,
        },
      ],
    },
  ])

  const handleAddComment = (e) => {
    e.preventDefault()
    if (!commentText.trim()) return

    const newComment = {
      id: Date.now().toString(),
      author: {
        id: currentUser?.id || 'guest',
        name: currentUser?.name || 'Logged User',
        avatar: currentUser?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
        role: currentUser?.role || 'user',
      },
      content: commentText,
      createdAt: 'Just now',
      likesCount: 0,
      replies: [],
    }

    setComments([newComment, ...comments])
    setCommentText('')
  }

  const handleAddReply = (parentId, replyText) => {
    // Helper function to recursively find and insert nested replies
    const updateReplies = (list) => {
      return list.map((item) => {
        if (item.id === parentId) {
          const newReply = {
            id: Date.now().toString(),
            author: {
              id: currentUser?.id || 'guest',
              name: currentUser?.name || 'Logged User',
              avatar: currentUser?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
            },
            content: replyText,
            createdAt: 'Just now',
            likesCount: 0,
          }
          return { ...item, replies: [...(item.replies || []), newReply] }
        }
        if (item.replies && item.replies.length > 0) {
          return { ...item, replies: updateReplies(item.replies) }
        }
        return item
      })
    }

    setComments(updateReplies(comments))
  }

  const handleDeleteComment = (commentId) => {
    // Helper function to recursively delete comments or replies
    const removeComment = (list) => {
      return list
        .filter((item) => item.id !== commentId)
        .map((item) => ({
          ...item,
          replies: item.replies ? removeComment(item.replies) : [],
        }))
    }

    setComments(removeComment(comments))
  }

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm my-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-8">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold text-gray-900">Discussion</h3>
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
            {comments.length}
          </span>
        </div>
      </div>

      {/* Main Comment Creation Box */}
      {currentUser ? (
        <form onSubmit={handleAddComment} className="mb-10 flex flex-col gap-3">
          <div className="flex gap-4">
            <img
              src={currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-100"
            />
            <div className="flex-1 border rounded-2xl p-3 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500 transition">
              <textarea
                rows="3"
                placeholder="What are your thoughts?"
                value={commentText}
                onChange={(e) => setCommentText(e.value ? e.value : e.target.value)}
                className="w-full outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400 resize-none"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition hover:scale-[0.98] cursor-pointer shadow-sm"
            >
              Post Comment
            </button>
          </div>
        </form>
      ) : (
        /* Prompt for unauthenticated users */
        <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-6 text-center mb-10">
          <p className="text-gray-600 text-sm mb-3">Log in to join the conversation and leave a reply.</p>
          <a
            href="/login"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition"
          >
            Sign In to Comment
          </a>
        </div>
      )}

      {/* Comment List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            currentUser={currentUser}
            onReply={handleAddReply}
            onDelete={handleDeleteComment}
          />
        ))}
      </div>
    </section>
  )
}

export default CommentSection