from flask import Blueprint,jsonify,request
from models.book_model import Book
from views.book_view import render_book_detail,render_book_list
from utils.decorators import roles_required,jwt_required

book_bp=Blueprint("Book", __name__)

@book_bp.route("/books", methods=["GET"])
def get_books():
    books=Book.get_all()
    return jsonify(render_book_list(books))


@book_bp.route("/books/<int:id>", methods=["GET"])
def get_book(id):
    book=Book.get_by_id(id)
    if book:
        return jsonify(render_book_detail(book))
    return jsonify({"error":"Libro no encontrado"}),404


@book_bp.route("/books", methods=["POST"])
@jwt_required
@roles_required(role=["admin"])
def create_book():
    data=request.json
    title=data.get("title")
    price=data.get("price")
    author=data.get("author")
    editorial=data.get("editorial")
    number_pages=data.get("number_pages")
    copies=data.get("copies")
    bookbinding=data.get("bookbinding")
    description=data.get("description")

    if not title or not price or not author or not editorial or not number_pages or not bookbinding or not description or not copies:
        return jsonify({"error":"Faltan datos requeridos"}),400
    book=Book(title=title,price=price,author=author,editorial=editorial,number_pages=number_pages,bookbinding=bookbinding,copies=copies,description=description)
    book.save()
    return jsonify(render_book_detail(book)),201


@book_bp.route("/books/<int:id>", methods=["PUT"])
@jwt_required
@roles_required(role=["admin"])
def update_book(id):
    book=Book.get_by_id(id)
    if not book:
        return jsonify({"error":"Libro no encontrado"}),404
    data=request.json
    title=data.get("title")
    price=data.get("price")
    author=data.get("author")
    editorial=data.get("editorial")
    number_pages=data.get("number_pages")
    copies=data.get("copies")
    bookbinding=data.get("bookbinding")
    description=data.get("description")

    book.update(title=title,price=price,author=author,editorial=editorial,number_pages=number_pages,copies=copies,bookbinding=bookbinding,description=description)
    return jsonify(render_book_detail(book))


@book_bp.route("/books/<int:id>", methods=["DELETE"])
@jwt_required
@roles_required(role=["admin"])
def delete_book(id):
    book=Book.get_by_id(id)
    if not book:
        return jsonify({"error":"Libro no encontrado"}),404
    book.delete()
    return "",204
        