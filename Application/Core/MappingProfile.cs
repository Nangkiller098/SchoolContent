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
        }
    }
}