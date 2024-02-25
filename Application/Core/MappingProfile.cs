using Application.Dto;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Content, Content>();
            CreateMap<Content, ContentDto>();

            CreateMap<Domain.Category, Domain.Category>();
            CreateMap<Domain.Category, CategoryDto>();

            CreateMap<Article, Article>();
            CreateMap<Article, ArticleDto>();
        }
    }
}